import React from "react";
import * as _ from "lodash";

const NoSchedule = () => {
  const emojis = ["🎉", "🤯", "😭", "👺", "😵", "🥹", "🥲", "😤", "😇"];

  return (
    <div className="mt-16 flex flex-col items-center justify-center gap-5">
      <p className="text-7xl -hue-rotate-[40deg]">
        {emojis[_.random(0, emojis.length - 1)]}
      </p>
      <h3 className="font-bold">На сегодня пар нет</h3>
    </div>
  );
};

export default NoSchedule;
