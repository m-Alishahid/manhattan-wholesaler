export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  specifications: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Dental Mirror',
    category: 'Dental Instruments',
    price: 15.99,
    image: '/placeholder.jpg', // Placeholder image
    description: 'High-quality stainless steel dental mirror for precise examinations.',
    specifications: ['Stainless steel', 'Autoclavable', 'Ergonomic handle']
  },
  {
    id: 2,
    name: 'Surgical Scalpel',
    category: 'Surgical Tools',
    price: 25.99,
    image: '/placeholder.jpg',
    description: 'Precision surgical scalpel with carbon steel blade.',
    specifications: ['Carbon steel blade', 'Sterile', 'Disposable']
  },
  {
    id: 3,
    name: 'Dental Gloves',
    category: 'Accessories',
    price: 8.99,
    image: '/placeholder.jpg',
    description: 'Latex-free nitrile gloves for dental procedures.',
    specifications: ['Nitrile material', 'Powder-free', 'Box of 100']
  },
  // Add more products as needed
];
