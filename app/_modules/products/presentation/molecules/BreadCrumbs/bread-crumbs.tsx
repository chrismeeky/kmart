import Image from "next/image";
import Link from "next/link";
import React from "react";

interface BreadCrumbsProps {
  name: string;
}

const BreadCrumbs = ({ name }: BreadCrumbsProps) => {
  return (
    <div className="flex items-center mb-[2rem]">
      <Link href="/">Products</Link>
      <Image
        className="mx-[1rem]"
        src="/icons/arrow-right.svg"
        width={8}
        height={10}
        alt=""
      />
      <Link className="text-gray-500 cursor-default" href="">
        {name}
      </Link>
    </div>
  );
};

export default BreadCrumbs;
