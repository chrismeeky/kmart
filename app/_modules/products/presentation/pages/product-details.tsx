import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProductsContainer from "../atoms/products-container";
import { getProduct } from "../../infrastructure/api/server-actions/product.actions";
import BreadCrumbs from "../molecules/bread-crumbs";
import ProductDetailsCard from "../molecules/product-details-card";
import ProductDetailsDescription from "../molecules/product-details-description";

interface DetailsProps {
  id: number;
}

const Details = async ({ id }: DetailsProps) => {
  const product = await getProduct(id);
  return (
    <ProductsContainer>
      <BreadCrumbs name={product?.name} />
      <ProductDetailsCard product={product} />
      <ProductDetailsDescription description={product?.description} />
    </ProductsContainer>
  );
};

export default Details;
