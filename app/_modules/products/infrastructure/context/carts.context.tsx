"use client";
import { ReactNode, createContext, useEffect, useState } from "react";
import { Product } from "../../domain/product";

interface CartProps {
  products: Product[];
  removeProduct: (id?: number) => void;
  addProduct: (product: Product) => void;
}

export const CartContext = createContext<CartProps>({
  products: [],
  removeProduct: () => {},
  addProduct: () => {},
});

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);

  const removeProduct = (id?: number) => {
    const filteredProducts = [...products].filter(
      (product) => product.id !== id
    );
    setProducts(filteredProducts);
    localStorage.setItem("carts", JSON.stringify(filteredProducts));
  };

  const addProduct = (product: Product) => {
    const newProducts = [...products, product];
    setProducts(newProducts);
    localStorage.setItem("carts", JSON.stringify(newProducts));
  };

  useEffect(() => {
    const storedCarts = localStorage?.getItem("carts");
    storedCarts && setProducts(JSON.parse(storedCarts));
  }, []);
  return (
    <CartContext.Provider
      value={{
        products,
        addProduct,
        removeProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
