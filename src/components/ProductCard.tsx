import React from "react";
import { Product } from "../types/Product";

type ProductListProps = {
  product:Product;
}

const ProductCard:React.FC<ProductListProps> = ({ product }) => {
  return(
    <div>
      <div key={product.id}>
        <image>{product.image}</image>
        <h1>{product.name}</h1>
        <p>{product.price}円</p>
      </div>
    </div>
  );
};

export default ProductCard;