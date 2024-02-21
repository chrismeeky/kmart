import ProductDetailsSkeleton from "@/app/_modules/products/presentation/molecules/ProductDetailsSkeleton/product-details-skeleton";
import Details from "@/app/_modules/products/presentation/pages/product-details";
import { Metadata } from "next";
import React, { Suspense } from "react";

export const metadata: Metadata = {
  title: "Product details",
  description: "View details about your products",
};

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
