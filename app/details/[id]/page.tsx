import ProductDetailsSkeleton from "@/app/_modules/products/presentation/molecules/product-details-skeleton";
import Details from "@/app/_modules/products/presentation/pages/product-details";
import React, { Suspense } from "react";

interface ProductDetailsProps {
  params: {
    id: number;
  };
}

const ProductDetails = ({ params }: ProductDetailsProps) => {
  return (
    <Suspense fallback={<ProductDetailsSkeleton />}>
      <Details id={params.id} />
    </Suspense>
  );
};

export default ProductDetails;
