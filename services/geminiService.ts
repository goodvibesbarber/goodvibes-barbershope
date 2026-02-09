
import { GoogleGenAI } from "@google/genai";
import { SHOP_DETAILS, SERVICES } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const systemInstruction = `
You are the AI Assistant for "Good Vibes Barber Shop" in Singapore. 
Your goal is to be helpful, professional, and maintain the "Good Vibes" persona.
Shop Name: ${SHOP_DETAILS.name}
Slogan: ${SHOP_DETAILS.slogan}
Location: ${SHOP_DETAILS.address}
Hours: ${SHOP_DETAILS.hours}
Contact: ${SHOP_DETAILS.phone}, ${SHOP_DETAILS.email}
Services: ${SERVICES.map(s => `${s.name}: $${s.price} (${s.duration} mins)`).join(', ')}

Guidelines:
1. Answer questions about prices, services, and location.
2. If someone wants to book, tell them they can use the "Book Now" button on the website.
3. Keep responses concise and friendly.
4. Mention that we are specialized in precision fades and a relaxing atmosphere.
`;

export async function askGemini(prompt: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having a little trouble connecting to the vibe. Could you try again? Or feel free to call us at +65 8727 3741!";
  }
}
