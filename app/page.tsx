import { Suspense } from "react";
import ProductsList from "./_modules/products/presentation/pages/products-list";
import ProductCardSkeleton from "./_modules/products/presentation/molecules/ProductCardSkeleton/product-card-skeleton";

export default function Home() {
  return (
    <Suspense fallback={<ProductCardSkeleton />}>
      <ProductsList />
    </Suspense>
  );
}
