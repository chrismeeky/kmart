"use client";
import { TextInput } from "@/app/_commons/components/atoms/TextInput/text-input";
import React, { useRef, useState } from "react";
import clsx from "clsx";
import { useCreateProduct } from "../../../infrastructure/api/hooks/useCreateProduct";

const ProductForm = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const nameRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const currencyCodeRef = useRef<HTMLInputElement>(null);
  const currencySymbolRef = useRef<HTMLInputElement>(null);
  const quantityRef = useRef<HTMLInputElement>(null);
  const imageLocationRef = useRef<HTMLInputElement>(null);

  const { loading, createProduct } = useCreateProduct({ redirectPath: "/" });
  const handleSubmit = async () => {
    const data = {
      name: nameRef.current?.value ?? "",
      description: descriptionRef.current?.value ?? "",
      price: Number(priceRef.current?.value ?? 0),
      currencyCode: currencyCodeRef.current?.value ?? "",
      currencySymbol: currencySymbolRef.current?.value ?? "",
      quantity: Number(quantityRef.current?.value ?? 0),
      imageLocation: imageLocationRef.current?.value ?? "",
    };
    // basic validation
    const noEmptyValue = Object.values(data).every((value) => !!value);
    if (noEmptyValue) {
      setErrorMessage("");
      createProduct(data);
    } else {
      setErrorMessage("All fields are required");
    }
  };

  return (
    <div className="bg-white w-full rounded-[0.6rem] border border-gray-300 p-[2rem]">
      <form>
        <TextInput
          ref={nameRef}
          className="border mb-[1rem]"
          placeholder="Name"
        />
        <TextInput
          ref={descriptionRef}
          className="border mb-[1rem]"
          placeholder="Description"
        />
        <TextInput
          ref={priceRef}
          className="border mb-[1rem]"
          placeholder="Price"
          type="number"
        />
        <TextInput
          ref={currencyCodeRef}
          className="border mb-[1rem]"
          placeholder="Currency code"
        />
        <TextInput
          ref={currencySymbolRef}
          className="border mb-[1rem]"
          placeholder="Currency symbol"
        />
        <TextInput
          ref={quantityRef}
          className="border mb-[1rem]"
          placeholder="Quantity"
          type="number"
        />
        <TextInput
          ref={imageLocationRef}
          className="border mb-[1rem]"
          placeholder="Image location"
        />
        <button
          type="button"
          onClick={handleSubmit}
          disabled={loading}
          className={clsx("button bg-primary mt-[1rem]", {
            "cursor-not-allowed opacity-20": loading,
          })}
        >
          Add product
        </button>
        <p className="mt-[0.5rem] text-[1.2rem] text-red">{errorMessage}</p>
      </form>
    </div>
  );
};

export default ProductForm;
