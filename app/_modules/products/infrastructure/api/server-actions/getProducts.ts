"use server";

import axios from "axios";
import { Product } from "../../../domain/product";

export const getProducts = async (): Promise<Product[]> => {
  try {
    const results = await axios.get(
      "https://my-json-server.typicode.com/carry1stdeveloper/mock-product-api/productBundles"
    );
    return results.data;
  } catch (error: any) {
    throw new Error("Failed to fetch products: " + error.message);
  }
};
