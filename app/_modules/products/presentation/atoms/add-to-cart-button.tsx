"use client";

import React, { useContext } from "react";
import { Product } from "../../domain/product";
import { CartContext } from "../../infrastructure/context/carts.context";

interface AddToCartProps {
  product: Product;
}

const AddToCart = ({ product }: AddToCartProps) => {
  const { products, addProduct, removeProduct } = useContext(CartContext);
  const isAdded = products.filter((item) => item.id === product.id).length;
  return (
    <button
      onClick={() =>
        isAdded ? removeProduct(product.id) : addProduct(product)
      }
      className="bg-green button ml-[1rem]"
    >
      {isAdded ? "Remove from Cart" : "Add to Cart"}
    </button>
  );
};

export default AddToCart;
