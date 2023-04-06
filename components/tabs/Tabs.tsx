"use client";
import { twClassNames } from "@/utils";
import React, { ReactNode, useState } from "react";

type TabsProps = {
  children: ReactNode[];
  icons?: ReactNode[];
  titles: string[];
};

const Tabs = ({ titles, children, icons }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div>
      <div className=" tabs  mb-8 items-start gap-y-4 max-[540px]:flex-col md:justify-between">
        {titles.map((title, i) => (
          <div
            key={title + i}
            onClick={() => setActiveTab(i)}
            className={twClassNames(
              i === activeTab && " bg-primaryGradient  text-white",
              "  flex flex-1 cursor-pointer flex-col items-center  gap-1 rounded-md p-2 text-white max-[540px]:w-full"
            )}
          >
            {icons && icons[i]}
            <a>{title}</a>
          </div>
        ))}
      </div>
      <>{children[activeTab]}</>
    </div>
  );
};

export default Tabs;
