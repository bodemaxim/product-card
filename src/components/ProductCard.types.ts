export type Product = {
  title: string;
  origin: string;
  price: Price;
  currency: 'RUB' | 'USD' | 'EUR';
  imageUrl: string;
};

export type Price = {
  kopeiki: number;
  usd: number;
  eur: number;
};

export type Props = {
  data: Product;
};
