import React from "react";
import ProductsContainer from "../../atoms/ProductsContainer/products-container";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductCardSkeleton = () => {
  return (
    <ProductsContainer>
      <div className="my-[1.9rem]">
        <Skeleton width="7rem" />
      </div>
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={index}
          className="grid grid-cols-5 bg-white p-[2.3rem] mb-[1rem] border border-gray-300 rounded-[.6rem]"
        >
          <div className="col-span-1">
            <Skeleton height="14.5rem" width="14.5rem" />
          </div>
          <div className="col-span-4 flex flex-col ml-[2.4rem] max-w-[50%]">
            <Skeleton height="1.6rem" />
            <Skeleton height="2.8rem" className="my-[1.6rem]" />
            <Skeleton height="1.6rem" />
            <div>
              <span className="text-primary font-semibold mt-[.8rem] cursor-pointer">
                <Skeleton height="1.6rem" />
              </span>
            </div>
          </div>
        </div>
      ))}
    </ProductsContainer>
  );
};

export default ProductCardSkeleton;
