import React from "react";
import ProductsContainer from "../atoms/ProductsContainer/products-container";
import BreadCrumbs from "../molecules/BreadCrumbs/bread-crumbs";
import ProductForm from "../organisms/ProductForm/product-form";

const NewProduct = () => {
  return (
    <ProductsContainer>
      <BreadCrumbs name="New product" />
      <ProductForm />
    </ProductsContainer>
  );
};

export default NewProduct;
