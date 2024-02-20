"use server";

import axios from "axios";
import { Product } from "../../../domain/product";
import { notFound, redirect } from "next/navigation";
import { revalidatePath, unstable_noStore } from "next/cache";

export const getProducts = async (): Promise<Product[]> => {
  unstable_noStore(); // ensures dynamic site generation
  try {
    const results = await axios.get(
      "https://my-json-server.typicode.com/carry1stdeveloper/mock-product-api/productBundles"
    );
    return results.data;
  } catch (error: any) {
    throw new Error("Failed to fetch products: " + error.message);
  }
};

export const getProduct = async (id: number): Promise<Product> => {
  try {
    const results = await axios.get(
      `https://my-json-server.typicode.com/carry1stdeveloper/mock-product-api/productBundles/${id}`
    );
    return results.data;
  } catch (error: any) {
    notFound();
  }
};

export const addProduct = async (product: Product) => {
  try {
    await axios.post(
      `https://my-json-server.typicode.com/carry1stdeveloper/mock-product-api/productBundles`,
      product
    );
  } catch (error: any) {
    throw new Error("Failed to add product: " + error.message);
  }
  revalidatePath("/"); // invalidates products list cache
  redirect("/");
};
