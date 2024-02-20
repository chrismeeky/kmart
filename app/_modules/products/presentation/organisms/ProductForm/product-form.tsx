"use client";
import { TextInput } from "@/app/_commons/components/atoms/TextInput/text-input";
import React, { FormEvent, useRef, useState } from "react";
import { addProduct } from "../../../infrastructure/api/server-actions/product.actions";
import clsx from "clsx";
import { formDataToObject } from "@/app/_commons/utils/FormDataToObject/form-data-to-object";

const ProductForm = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const currencyCodeRef = useRef<HTMLInputElement>(null);
  const currencySymbolRef = useRef<HTMLInputElement>(null);
  const quantityRef = useRef<HTMLInputElement>(null);
  const imageLocationRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (formData: FormData) => {
    console.log("form data", formDataToObject(formData));
    const data = formDataToObject(formData);
    // basic validation
    const noEmptyValue = Object.values(data).every((value) => !!value);
    if (noEmptyValue) {
      setErrorMessage("");
      setIsSubmitting(true);
      await addProduct(formData);
    } else {
      setIsSubmitting(false);
      setErrorMessage("All fields are required");
    }
  };
  return (
    <div className="bg-white w-full rounded-[0.6rem] border border-gray-300 p-[2rem]">
      <form action={handleSubmit}>
        <TextInput
          ref={nameRef}
          className="border mb-[1rem]"
          placeholder="Name"
          name="name"
        />
        <TextInput
          ref={descriptionRef}
          className="border mb-[1rem]"
          placeholder="Description"
          name="description"
        />
        <TextInput
          ref={priceRef}
          className="border mb-[1rem]"
          placeholder="Price"
          type="number"
          name="price"
        />
        <TextInput
          ref={currencyCodeRef}
          className="border mb-[1rem]"
          placeholder="Currency code"
          name="currencyCode"
        />
        <TextInput
          ref={currencySymbolRef}
          className="border mb-[1rem]"
          placeholder="Currency symbol"
          name="currencySymbol"
        />
        <TextInput
          ref={quantityRef}
          className="border mb-[1rem]"
          placeholder="Quantity"
          type="number"
          name="quantity"
        />
        <TextInput
          ref={imageLocationRef}
          className="border mb-[1rem]"
          placeholder="Image location"
          name="imageLocation"
        />
        <button
          disabled={isSubmitting}
          className={clsx("button bg-primary mt-[1rem]", {
            "cursor-not-allowed opacity-55": isSubmitting,
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
