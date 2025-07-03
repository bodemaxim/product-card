import type { Props } from './ProductCard.types';

const ProductCard: React.FC<Props> = ({ data }: Props) => {
  const getPrice = () => {
    switch (data.currency) {
      case 'RUB':
        return data.price.kopeiki / 100;
      case 'EUR':
        return data.price.eur;
      case 'USD':
        return data.price.usd;
      default:
        return NaN;
    }
  };

  const priceValue = getPrice();

  const formattedPrice = isNaN(priceValue)
    ? 'Уточняйте цену у продавца'
    : new Intl.NumberFormat(undefined, {
        style: 'currency',
        currency: data.currency,
        minimumFractionDigits: 2,
      }).format(priceValue);

  return (
    <div className="flex flex-col max-w-sm mx-auto border border-gray-300 rounded-lg shadow-md p-4 md:p-6 bg-pink">
      <img
        src={data.imageUrl}
        alt={data.title}
        className="w-full h-auto rounded-md mb-4"
      />
      <h2 className="text-xl font-semibold mb-2">{data.title}</h2>
      <p className="text-gray-600 mb-2">Страна происхождения: {data.origin}</p>
      <p className="text-lg font-bold">{formattedPrice}</p>
    </div>
  );
};

export default ProductCard;
