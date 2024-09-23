import React from "react";
import { Product } from "../types/Product";
import ProductCard from "./ProductCard";

type ProductListProps = {
  products: Product[];
}

const ProductList:React.FC<ProductListProps> = ({products}) => {
  return (
    <div>
      {products.length > 0 ?  (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p>商品がありません</p>
      )
      }
    </div>
  );
};

export default ProductList;