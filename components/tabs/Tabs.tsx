"use client";
import { twClassNames } from "@/utils";
import React, { ReactNode, useState } from "react";

type TabsProps = {
  children: ReactNode[];
  titles: string[];
};

const Tabs = ({ titles, children }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div>
      <div className="tabs  mb-8 justify-between">
        {titles.map((title, i) => (
          <a
            key={title + i}
            onClick={() => setActiveTab(i)}
            className={twClassNames(
              i === activeTab &&
                "rounded-md  bg-gradient-to-r from-primary to-[#726CF8]  text-white",
              " tab tab-lifted text-white lg:tab-lg"
            )}
          >
            {title}
          </a>
        ))}
      </div>
      <>{children[activeTab]}</>
    </div>
  );
};

export default Tabs;
