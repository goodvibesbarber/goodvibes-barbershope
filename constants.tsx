
import { Service } from './types';

export const SERVICES: Service[] = [
  {
    id: 'haircut',
    name: 'Haircut',
    price: 35,
    duration: 40,
    description: 'Precision cut tailored to your style. Includes consultation and wash.'
  },
  {
    id: 'student-haircut',
    name: 'Student Haircut',
    price: 25,
    duration: 30,
    description: 'Fresh fade for the students. Valid ID required.'
  },
  {
    id: 'beard-trim',
    name: 'Beard Trim',
    price: 25,
    duration: 30,
    description: 'Sculpting, lining, and hot towel finish for your facial hair.'
  },
  {
    id: 'clean-shave',
    name: 'Clean Shave',
    price: 30,
    duration: 30,
    description: 'The classic hot towel shave experience.'
  },
  {
    id: 'ear-wax',
    name: 'Ear Wax',
    price: 8,
    duration: 10,
    description: 'Quick and clean ear hair removal.'
  },
  {
    id: 'nose-wax',
    name: 'Nose Wax',
    price: 8,
    duration: 10,
    description: 'Professional nose hair waxing.'
  },
  {
    id: 'vibes-experience',
    name: 'Vibes Experience',
    price: 55,
    duration: 60,
    description: 'Full Service: Haircut & Beard Trim or Clean Shave.'
  },
  {
    id: 'good-vibes-experience',
    name: 'Good Vibes Experience',
    price: 70,
    duration: 90,
    description: 'The Works: Haircut, Head Massage, Beard/Shave, and Facial.'
  }
];

export const SHOP_DETAILS = {
  name: 'Good Vibes Barber Shop',
  slogan: 'Zero Stress. Perfect Fades. More Than a Haircut, It’s a Vibe.',
  address: 'BLK 360 YUNG AN ROAD #04-101, SINGAPORE 610360',
  hours: 'Mon – Sat | 11:00 AM – 8:00 PM (Closed Sundays)',
  phone: '+65 8727 3741',
  email: 'pasposip@gmail.com',
  instagram: '@GoodVibesBarberShop',
  website: 'www.GoodVibesBarber.com'
};
