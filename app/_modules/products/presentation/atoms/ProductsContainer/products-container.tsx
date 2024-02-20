import React, { ReactNode } from "react";

interface ProductsContainerProps {
  children: ReactNode;
}

const ProductsContainer = ({ children }: ProductsContainerProps) => {
  return <div className="px-[16%]">{children}</div>;
};

export default ProductsContainer;
