import React, { useEffect } from 'react';
import { useProductContext } from '../context/ProductContext';
import ProductList from '../components/ProductList';
import { fetchProducts } from '../services/productService';

const Home: React.FC = () => {
  const { products, setProducts } = useProductContext();


  useEffect(() => {
    const getProducts = async () => {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
    };
    getProducts();
  }, [setProducts]);

  return(
    <div>
      <h1>商品一覧</h1>
      <ProductList products={products} /> 
    </div>
  );
};

export default Home;