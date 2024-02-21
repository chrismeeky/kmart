import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import AddToCart from "./add-to-cart-button";
import { productMock } from "./product.mock";
import CartProvider from "../../../infrastructure/context/carts.context";
import user from "@testing-library/user-event";

describe("Add to cart button", () => {
  it("renders a button", async () => {
    render(<AddToCart product={productMock} />, { wrapper: CartProvider });

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button.textContent).toBe("Add to Cart");
    await user.click(button);
    expect(button.textContent).toBe("Remove from Cart");
    await user.click(button);
    expect(button.textContent).toBe("Add to Cart");
  });
});
