import React from "react";
import NewProduct from "../_modules/products/presentation/pages/new-product";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create product",
  description: "Create a new product",
};

export default function () {
  return <NewProduct />;
}
