"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Image from "next/image";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  {
    name: "Home",
    href: "/",
    iconSrc: "/icons/home.svg",
  },
  {
    name: "Add product",
    href: "#",
    iconSrc: "/icons/add.svg",
  },
  {
    name: "Carts",
    href: "#",
    iconSrc: "/icons/cart.svg",
  },
];

export default function NavLinks() {
  const pathname = usePathname();

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
