import React from "react";
import { Product } from "../../domain/product";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({
  id,
  name,
  description,
  price,
  currencySymbol,
  imageLocation,
}: Product) => {
  return (
    <div className="grid grid-cols-5 bg-white p-[2.3rem] mb-[1rem] border border-gray-300 rounded-[.6rem]">
      <div className="col-span-1">
        <Image src={imageLocation} width={184.8} height={184.8} alt={name} />
      </div>
      <div className="col-span-4 flex flex-col ml-[2.4rem]">
        <span className="font-semibold mb-[1.6rem]">{name}</span>
        <span className="text-[2.8rem] font-bold">{`${currencySymbol}${price}`}</span>
        <span className="mt-[1.6rem]">{description}</span>
        <Link href={`/details/${id}`}>
          <span className="text-primary font-semibold mt-[.8rem] cursor-pointer">
            View details
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
