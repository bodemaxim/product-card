import type { Product } from './ProductCard.types';

export const MockProduct: Product = {
  title: 'Кофеварка',
  origin: 'Италия',
  price: {
    kopeiki: 1699999,
    usd: 169,
    eur: 150,
  },
  currency: 'RUB',
  imageUrl: 'https://i.ibb.co/BVNMmKL7/image.jpg',
};
