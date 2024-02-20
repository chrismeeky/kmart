import Image from "next/image";
import { InputProps, TextInput } from "../../atoms/TextInput/text-input";
import { useRef } from "react";

interface SearchInputProps extends InputProps {
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

export const SearchInput = ({ ...props }: SearchInputProps) => {
  return (
    <div className="search flex items-center bg-white border border-gray-300 overflow-hidden w-100p rounded-small pr-0.9 ">
      <div className="px-0.8">
        <Image src="/icons/search.svg" alt="search" height="24" width="24" />
      </div>
      <TextInput className="bottom-0" />
      <div className="cursor-pointer w-2.4 h-2.4">
        <Image
          className="search-input__close-icon "
          src="/icons/close.svg"
          alt="search"
          height="24"
          width="24"
        />
      </div>
    </div>
  );
};
