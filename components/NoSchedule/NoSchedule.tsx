import React from "react";
import * as _ from "lodash";

const NoSchedule = () => {
  const emojis = ["🎉", "🤯", "😭", "👺", "😵", "🥹", "🥲", "😤", "😇"];
  // const emojis = ["&#x1F600;", "&#x1F602;", "&#x1F605;"];

  return (
    <div className="mt-16 flex flex-col items-center justify-center gap-5 ">
      <span role="img" className=" text-7xl text-primary ">
        {emojis[_.random(0, emojis.length - 1)]}
      </span>
      <h3 className="font-bold">На сегодня пар нет</h3>
    </div>
  );
};

export default NoSchedule;
