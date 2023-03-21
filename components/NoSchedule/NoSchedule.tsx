import React from "react";
import * as _ from "lodash";
// 1F31E - sun
// 1F44F - clap
// 1F47A - oni
// 1F47B - ghost
// 1F494 - heart broken
// 1F61E - sad
// 1F622
// 1F628
// 1F62D
// 1F630
// 1F63F
// 1F640
const emojis = [
  127774, // 🌞
  128122, //  👺
  128079, //  👏
  128123, // 👻
  128148, // 💔
  128542, // 😞
  128546, // 😢
  128552, // 😨
  128557, // 😭
  128560, // 😰
  128575, // 😿
  128576, // 🙀
];
const NoSchedule = () => {
  const randomEmoji = String.fromCodePoint(emojis[_.random(0, emojis.length)]);
  return (
    <div className="mt-16 flex flex-col items-center justify-center gap-5 ">
      <span role="img" className=" text-7xl text-primary ">
        {randomEmoji}
      </span>
      <h3 className="font-bold">На сегодня пар нет</h3>
    </div>
  );
};

export default NoSchedule;
