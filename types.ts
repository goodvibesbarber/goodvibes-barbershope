
export interface Service {
  id: string;
  name: string;
  price: number;
  duration: number;
  description: string;
}

export interface Appointment {
  serviceId: string;
  date: string;
  time: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
}

export enum ViewState {
  HOME = 'HOME',
  BOOKING = 'BOOKING',
  SERVICES = 'SERVICES',
  ABOUT = 'ABOUT',
  CONTACT = 'CONTACT'
}
