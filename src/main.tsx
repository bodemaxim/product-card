import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import ProductCard from './components/ProductCard';
import { MockProduct } from './components/ProductCard.consts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProductCard data={MockProduct} />
  </StrictMode>
);
