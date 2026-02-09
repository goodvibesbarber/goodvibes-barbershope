
import { GoogleGenAI } from "@google/genai";
import { SHOP_DETAILS, SERVICES } from "../constants";

// Safety check for API_KEY to prevent the app from crashing in environments without it
const apiKey = process.env.API_KEY;
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

const systemInstruction = `
You are the AI Concierge for "Good Vibes Barber Shop" in Singapore. 
Your goal is to be helpful, professional, and maintain the "Good Vibes" persona: relaxed but premium.

Shop Details:
- Name: ${SHOP_DETAILS.name}
- Slogan: ${SHOP_DETAILS.slogan}
- Location: ${SHOP_DETAILS.address} (BLK 360 YUNG AN ROAD #04-101, SINGAPORE 610360)
- Hours: ${SHOP_DETAILS.hours}
- Contact: Phone ${SHOP_DETAILS.phone}, Email ${SHOP_DETAILS.email}
- Instagram: ${SHOP_DETAILS.instagram}

Service Menu:
${SERVICES.map(s => `- ${s.name}: $${s.price} (${s.duration} mins) - ${s.description}`).join('\n')}

Guidelines:
1. Always mention the relaxing atmosphere and precision fades.
2. For booking, direct users to the "Book Now" button on the website.
3. If they ask about location, mention we are near Yung An Road.
4. Keep responses "Vibey" – short, sharp, and helpful.
5. If the user asks for something we don't do, politely suggest our closest service.
`;

export async function askGemini(prompt: string) {
  if (!ai) {
    return "The Vibe Assistant is currently offline (Missing API Key). Please check your project settings to enable me!";
  }

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
    return "I'm having a little trouble connecting to the vibe right now. Feel free to call us directly at +65 8727 3741!";
  }
}
