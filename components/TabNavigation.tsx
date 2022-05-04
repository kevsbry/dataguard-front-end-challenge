import React from "react";
import { useAppSelector } from "../app/hooks";

import Tab from "./Tab";
import Logo from "./Logo";
import ToggleSwitch from "./ToggleSwitch";
import { useDispatch } from "react-redux";
import { togglePowerStatus } from "../features/power-status-slice";

const TabNavigation = () => {
  const currentTab = useAppSelector((state) => state.currentTab);
  const powerStatus = useAppSelector((state) => state.powerStatus);
  const dispatch = useDispatch();

  return (
    <div className="prose h-screen bg-gray-100 flex flex-col relative">
      <Logo />

      <Tab tabVariant="tab1" active={currentTab.name === "tab1"} />
      <Tab tabVariant="tab2" active={currentTab.name === "tab2"} />
      <Tab tabVariant="tab3" active={currentTab.name === "tab3"} />

      <div className="w-full absolute left-0 bottom-0 flex p-4 pb-8 justify-evenly">
        <h5 className="font-light">
          All plugins {powerStatus.enabled ? "enabled" : "disabled"}
        </h5>

        <ToggleSwitch
          active={powerStatus.enabled}
          onToggle={() => dispatch(togglePowerStatus())}
          powerIcon={true}
        />
      </div>
    </div>
  );
};

export default TabNavigation;
