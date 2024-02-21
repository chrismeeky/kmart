import type { Metadata } from "next";

import { inter } from "./fonts";
import "./globals.css";
import HomeTemplate from "./_commons/components/templates/home.template";
import CartProvider from "./_modules/products/infrastructure/context/carts.context";

export const metadata: Metadata = {
  title: {
    template: "%s | Kmart",
    default: "Kmart",
  },
  description: "Buy and sell your products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-body-default antialiased`}>
        <CartProvider>
          <HomeTemplate> {children}</HomeTemplate>
        </CartProvider>
      </body>
    </html>
  );
}
