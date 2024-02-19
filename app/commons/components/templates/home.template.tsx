import React, { ReactNode } from "react";
import Header from "../organisms/header";
import SideBar from "../organisms/side-bar";

interface HomeTemplateProps {
  children: ReactNode;
}

const HomeTemplate = ({ children }: HomeTemplateProps) => {
  return (
    <div className="grid grid-cols-5 h-full">
      <div className="col-span-1">
        <SideBar />
      </div>
      <div className="flex flex-col col-span-4 h-full bg-gray-100 overflow-scroll">
        <Header />
        <div className="flex-1 mt-auto">{children}</div>
      </div>
    </div>
  );
};

export default HomeTemplate;
