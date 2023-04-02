import React from "react";
import Image from "next/image";
import shareIcon from "@/assets/ios-share.svg";
import iphoneStepOne from "@/assets/iphoneStepOne.png";
import iphoneStepTwo from "@/assets/iphoneStepTwo.png";
import iphoneStepThree from "@/assets/iphoneStepThree.png";
import iphoneStepFour from "@/assets/iphoneStepFour.jpg";

const IosIntallationTab = () => {
  return (
    <section className="grid gap-14">
      <div>
        <h3 className="mb-2  text-xl font-bold ">Шаг 1 </h3>
        <p className="mb-4">
          При переходе на веб-сайт коснитесь кнопки{" "}
          <Image
            src={shareIcon}
            alt="share button"
            height="20"
            width="20"
            className="inline align-middle"
          />{" "}
          в строке меню
        </p>
        <Image src={iphoneStepOne} alt="step one" />
      </div>
      <div>
        <h3 className="mb-2 text-xl font-bold  ">Шаг 2 </h3>
        <p className="mb-4">
          Прокрутите вниз список параметров, затем коснитесь «На экран
          &quot;Домой&quot;».
        </p>
        <Image src={iphoneStepTwo} alt="step two" />
      </div>

      <div>
        <h3 className="mb-2 text-xl  font-bold  ">Шаг 2.1 </h3>
        <p className="mb-4">
          Осталось лишь коснуться кнопки &quot;добавить&quot;
        </p>
        <Image src={iphoneStepThree} alt="step two" />
      </div>

      <div>
        <h3 className="mb-2 text-xl  font-bold   ">🎉 Та-дааааа</h3>
        <p className="mb-4">
          Теперь от расписания вас отделяет лишь одно касание
        </p>
        <Image src={iphoneStepFour} alt="step four" />
      </div>
    </section>
  );
};

export default IosIntallationTab;
