import { Product } from './types/Products'

export const sampleProducts: Product[] = [
  {
    _id: '',
    name: 'Khao Soi Gai',
    slug: 'khao-soi-gai',
    category: 'Thai Noodle',
    image: '../images/khaosoigai.jpg',
    price: 16.99,
    countInStock: 20,
    brand: 'Chad Thai',
    rating: 4,
    numReviews: 12,
    description:
      'Egg noodles and sliced chicken breast in curry sauce then topped with coriander and green onion and served with red onions, pickle cabbage, lime, and chili oil',
  },
  {
    _id: '',
    name: 'Tao Hu Tod',
    slug: 'tao-hu-tod',
    category: 'Appetizers',
    image: '../images/taohutod.jpg',
    price: 8.99,
    countInStock: 50,
    brand: 'Chad Thai',
    rating: 3.8,
    numReviews: 15,
    description: 'Deep fried tofu served with sweet peanut sauce',
  },
  {
    _id: '',
    name: 'Thai Iced Tea',
    slug: 'thai-iced-tea',
    category: 'Beverages',
    image: '../images/thaiicedtea.jpg',
    price: 4.0,
    countInStock: 100,
    brand: 'Chad Thai',
    rating: 5,
    numReviews: 20,
    description: 'Traditional Thai Iced Thai',
  },
]
