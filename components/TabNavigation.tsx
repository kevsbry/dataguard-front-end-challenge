import React from "react";
import { useAppSelector } from "../app/hooks";

import Tab from "./Tab";
import Logo from "./Logo";

const TabNavigation = () => {
  const currentTab = useAppSelector((state) => state.currentTab);

  return (
    <div className="prose h-screen bg-gray-100 flex flex-col">
      <Logo />
      <Tab tabVariant="tab1" active={currentTab.name === "tab1"} />
      <Tab tabVariant="tab2" active={currentTab.name === "tab2"} />
      <Tab tabVariant="tab3" active={currentTab.name === "tab3"} />
    </div>
  );
};

export default TabNavigation;
