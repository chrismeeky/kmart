"use server";

import axios from "axios";
import { Product } from "../../../domain/product";
import { notFound, redirect } from "next/navigation";
import { revalidatePath, unstable_noStore } from "next/cache";
import { formDataToObject } from "@/app/_commons/utils/form-data-to-object";

const baseUrl = process.env.BASE_URL as string;

export const getProducts = async (): Promise<Product[]> => {
  unstable_noStore(); // ensures dynamic site generation
  try {
    const results = await axios.get(baseUrl);
    return results.data;
  } catch (error: any) {
    throw new Error("Failed to fetch products");
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

export const addProduct = async (formData: FormData) => {
  try {
    const data = formDataToObject(formData);
    await axios.post(baseUrl, data);
  } catch (error: any) {
    throw new Error("Failed to add product: " + error.message);
  }
  revalidatePath("/"); // invalidates products list cache
  redirect("/");
};
