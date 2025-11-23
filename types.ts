export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  tags: string[];
}

export interface Service {
  id: string;
  title: string;
  duration: string;
  price: number;
  image: string;
  description: string;
  locationType: 'store' | 'home';
}

export interface Store {
  id: string;
  name: string;
  address: string;
  phone: string;
}

export enum PageView {
  HOME = 'HOME',
  SHOP = 'SHOP',
  SERVICES = 'SERVICES',
  AI_CONSULT = 'AI_CONSULT'
}

export interface CartItem extends Product {
  quantity: number;
}