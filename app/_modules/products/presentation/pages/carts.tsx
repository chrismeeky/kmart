"use client";
import React, { useContext } from "react";
import ProductsContainer from "../atoms/ProductsContainer/products-container";
import BreadCrumbs from "../molecules/bread-crumbs";
import ProductDetailsCard from "../molecules/product-details-card";
import { CartContext } from "../../infrastructure/context/carts.context";

const CartsList = () => {
  const { products } = useContext(CartContext);
  return (
    <ProductsContainer>
      <BreadCrumbs name="Carts" />
      {products.map((product) => (
        <div className="mb-[1rem]" key={product.id}>
          <ProductDetailsCard product={product} />
        </div>
      ))}
      {!products.length ? (
        <h3 className="text-heading-5 w-fit m-auto text-gray-600">
          Your cart is empty
        </h3>
      ) : null}
    </ProductsContainer>
  );
};

export default CartsList;
