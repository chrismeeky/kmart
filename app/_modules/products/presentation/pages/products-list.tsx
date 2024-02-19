import React from "react";
import ProductCard from "../molecules/product-card";
import { getProducts } from "../../infrastructure/api/server-actions/getProducts";

const ProductsList = async () => {
  const products = await getProducts();
  return (
    <div className="px-[16%]">
      <p className="my-[1.9rem]">
        {products?.length > 0 ? `${products.length} items` : ""}
      </p>
      {products?.map(
        ({
          id,
          name,
          description,
          price,
          currencyCode,
          currencySymbol,
          imageLocation,
        }) => (
          <ProductCard
            key={id}
            id={id}
            name={name}
            description={description}
            price={price}
            currencyCode={currencyCode}
            currencySymbol={currencySymbol}
            imageLocation={imageLocation}
          />
        )
      )}
    </div>
  );
};

export default ProductsList;
