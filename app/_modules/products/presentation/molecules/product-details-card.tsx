import React from "react";
import { Product } from "../../domain/product";
import Image from "next/image";
import AddToCart from "../atoms/AddToCartButton/add-to-cart-button";

interface ProductDetailsCardProps {
  product: Product;
}

const ProductDetailsCard = ({ product }: ProductDetailsCardProps) => {
  return (
    <div className="grid grid-cols-5 border border-gray-300 rounded-[0.6rem] p-[2rem] items-center">
      <div className="col-span-1">
        <div className="border border-gray-300 rounded-[0.6rem]">
          <Image
            src={product.imageLocation}
            height={380}
            width={380}
            alt={product.name}
          />
        </div>
      </div>
      <div className="col-span-4 flex flex-col mx-[2.2rem]">
        <p className="text-[2rem] font-bold">{product.name}</p>
        <div className="mt-[1.5rem]">
          <span>Price: </span>
          <span className="font-bold">{`${product.currencySymbol}${product.price}`}</span>
        </div>
        <div className="mt-[1.5rem]">
          <span>Quantity in stock: </span>
          <span className="font-bold">{`${product.quantity}${product.price}`}</span>
        </div>
        <div className="flex items-center mt-[1.5rem]">
          <button className="bg-primary button">Buy Now</button>
          <AddToCart product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
