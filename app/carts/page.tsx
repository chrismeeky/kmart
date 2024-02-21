import React from "react";
import CartsList from "../_modules/products/presentation/pages/carts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Carts",
  description: "Your shopping carts",
};

const Carts = () => {
  return <CartsList />;
};

export default Carts;
