import { Product } from '../types/Product';

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch('/api/products');
  return response.json();
};