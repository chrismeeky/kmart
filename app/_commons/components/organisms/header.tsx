// import { Images } from "@assets";
// import { SearchInput } from "@commons/components/molecules/SearchInput/SearchInput";
// import SelectInput from "@commons/components/molecules/SelectInput/SelectInput";
// import { Box, Text, Image } from "@commons/styledComponents/basics";
import usaIcon from "@assets/images/united-state-flag.png";
import Image from "next/image";
import { SearchInput } from "../molecules/SearchInput/search-input";
// import SearchInput from "../molecules/search-input";
// import { countrySelectionList } from "@scopes/authentication/domain/constants/countrySelectionList";

const Header = () => {
  return (
    <div className="header w-[40%] py-[2.5rem] mx-auto">
      <SearchInput placeholder="Search here" />
    </div>
  );
};

export default Header;
