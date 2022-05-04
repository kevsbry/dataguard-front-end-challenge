import React from "react";
import Link from "next/link";

import { TabVariants } from "../typings/tab-variants";

import { IconContext } from "react-icons";
import { CgMenuGridR } from "react-icons/cg";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { FaRegCalendarCheck } from "react-icons/fa";

const Tab = ({
  tabVariant,
  active,
}: {
  tabVariant: TabVariants;
  active: boolean;
}) => {
  const tabContent = useTabContent(tabVariant);
  const { name, icon } = tabContent;

  return (
    <IconContext.Provider value={{ className: "mr-2 text-xl" }}>
      <Link href={`/${tabVariant}`}>
        <div
          className={`${
            active
              ? "bg-white border-l-[5px] border-red-600"
              : "hover:bg-slate-50"
          } flex items-center pl-4 transition-all hover:cursor-pointer`}
        >
          {icon}
          <h6 className="mt-3 mb-3 font-normal">{name}</h6>
        </div>
      </Link>
    </IconContext.Provider>
  );
};

// Helpers

const useTabContent = (variant: TabVariants) => {
  switch (variant) {
    case "tab1":
      return {
        name: "Marketing",
        icon: <CgMenuGridR />,
      };

    case "tab2":
      return {
        name: "Finance",
        icon: <RiMoneyDollarCircleLine />,
      };

    case "tab3":
      return {
        name: "Personnel",
        icon: <FaRegCalendarCheck />,
      };
  }
};

export default Tab;
