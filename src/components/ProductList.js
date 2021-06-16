import React, { useState, useEffect } from "react";
import { Column } from "../styles";
import Card from "./Card";
import data from "../assets/data/product.json";

export const ProductList = () => {
  const [products, setProducts] = useState(data);

  return (
    <>
    <h1>Products</h1>
      {products.map((item) => {
        return (
          <Column key={item.id}>
            <Card product={item} />
          </Column>
        );
      })}
    </>
  );
};

export default ProductList;
