import React from "react";
import ProductCard from "../molecules/ProductCard/product-card";
import { getProducts } from "../../infrastructure/api/server-actions/product.actions";
import ProductsContainer from "../atoms/ProductsContainer/products-container";

const ProductsList = async () => {
  const products = await getProducts();
  return (
    <ProductsContainer>
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
    </ProductsContainer>
  );
};

export default ProductsList;
