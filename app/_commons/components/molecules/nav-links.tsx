"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Image from "next/image";
import { useContext } from "react";
import { CartContext } from "@/app/_modules/products/infrastructure/context/carts.context";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.

export default function NavLinks() {
  const { products } = useContext(CartContext);
  const pathname = usePathname();
  const links = [
    {
      name: "Home",
      href: "/",
      iconSrc: "/icons/home.svg",
    },
    {
      name: `Carts (${products.length})`,
      href: "/carts",
      iconSrc: "/icons/cart.svg",
    },
    {
      name: "Add product",
      href: "/new-product",
      iconSrc: "/icons/add.svg",
    },
  ];

  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              `flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3`,
              {
                "bg-sky-100 text-blue-600": pathname === link.href,
              }
            )}
          >
            <Image src={link.iconSrc} width={24} height={24} alt={link.name} />
            <p className="text-body-default hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
