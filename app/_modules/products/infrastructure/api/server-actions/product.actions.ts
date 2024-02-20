"use server";

import axios from "axios";
import { Product } from "../../../domain/product";
import { notFound, redirect } from "next/navigation";
import { revalidatePath, unstable_noStore } from "next/cache";

const baseUrl = process.env.BASE_URL as string;

export const getProducts = async (): Promise<Product[]> => {
  console.log("base url", process.env.BASE_URL);
  unstable_noStore(); // ensures dynamic site generation
  try {
    const results = await axios.get(baseUrl);
    return results.data;
  } catch (error: any) {
    throw new Error("Failed to fetch products: " + error.message);
  }
};

export const getProduct = async (id: number): Promise<Product> => {
  try {
    const results = await axios.get(`${baseUrl}/${id}`);
    return results.data;
  } catch (error: any) {
    notFound();
  }
};

export const addProduct = async (product: Product) => {
  try {
    await axios.post(baseUrl, product);
  } catch (error: any) {
    throw new Error("Failed to add product: " + error.message);
  }
  revalidatePath("/"); // invalidates products list cache
  redirect("/");
};
