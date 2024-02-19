import React from "react";

interface ProductDetailsDescriptionProps {
  description: string;
}

const ProductDetailsDescription = ({
  description,
}: ProductDetailsDescriptionProps) => {
  return (
    <div className="mt-[2rem]">
      <h4 className="text-heading-4 mb-[1rem] font-semibold">Description:</h4>
      <hr />
      <p className="mt-[2rem]">{description}</p>
    </div>
  );
};

export default ProductDetailsDescription;
