import React from "react";
import ProductsContainer from "../../atoms/ProductsContainer/products-container";
import Skeleton from "react-loading-skeleton";

const ProductDetailsSkeleton = () => {
  return (
    <ProductsContainer>
      <Skeleton baseColor="white" width="15rem" height="1.6rem" />
      <Skeleton
        className="mt-[2rem]"
        baseColor="white"
        width="100%"
        height="20rem"
      />

      <Skeleton
        className="mt-[2rem] mb-[1rem]"
        baseColor="white"
        width="20rem"
        height="2rem"
      />
      <Skeleton
        className="h-[0.1rem]"
        baseColor="white"
        width="100%"
        height=".1rem"
      />
      <Skeleton
        className="mt-[2rem] mb-[1rem]"
        baseColor="white"
        width="100%"
        height="2rem"
      />
    </ProductsContainer>
  );
};

export default ProductDetailsSkeleton;
