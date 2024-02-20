import { lusitana } from "@/app/fonts";
import Image from "next/image";

const MyLogo = () => {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <Image alt="Logo" src="/logos/logo.svg" width="44" height="44" />
      <p className="text-[44px]">KMart</p>
    </div>
  );
};
export default MyLogo;
