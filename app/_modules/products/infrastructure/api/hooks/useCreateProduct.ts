import axios from "axios";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { Product } from "../../../domain/product";

interface Props {
  onSuccess?: () => void;
  customErrorMessage?: string;
  redirectPath?: string;
  validatePath?: string;
}
// const baseUrl = process.env.BASE_URL as string;
export const useCreateProduct = ({
  onSuccess,
  customErrorMessage,
  redirectPath,
  validatePath,
}: Props) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();

  const createProduct = async (product: Product) => {
    try {
      setLoading(true);
      const response = await axios.post(
        "https://my-json-server.typicode.com/carry1stdeveloper/mock-product-api/productBundles",
        product
      );
      setLoading(false);
      setData(response.data);
      typeof onSuccess === "function" && onSuccess();
    } catch (error: any) {
      setLoading(false);
      setError(
        customErrorMessage ?? "A propblem occured while creating your product"
      );
    }
  };

  useEffect(() => {
    if (data) {
      redirectPath && redirect("/");
      validatePath && revalidatePath(validatePath);
    }
  }, [data]);

  useEffect(() => {
    if (error.length) {
      throw new Error(error);
    }
  }, [error]);

  return {
    createProduct,
    error,
    loading,
    data,
  };
};
