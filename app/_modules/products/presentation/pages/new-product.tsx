import React from "react";
import ProductsContainer from "../atoms/products-container";
import BreadCrumbs from "../molecules/bread-crumbs";
import ProductForm from "../organisms/product-form";

const NewProduct = () => {
  return (
    <ProductsContainer>
      <BreadCrumbs name="New product" />
      <ProductForm />
    </ProductsContainer>
  );
};

export default NewProduct;
