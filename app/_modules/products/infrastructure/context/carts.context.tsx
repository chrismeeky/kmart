"use client";
import { ReactNode, createContext, useState } from "react";
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
  const storedCarts = localStorage.getItem("carts");
  const [products, setProducts] = useState<Product[]>(
    storedCarts ? JSON.parse(storedCarts) : []
  );

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
