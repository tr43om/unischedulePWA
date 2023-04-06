import React from "react";
import Image from "next/image";
import shareIcon from "@/assets/ios-share.svg";
import iphoneStepOne from "@/assets/iphoneStepOne.png";
import iphoneStepTwo from "@/assets/iphoneStepTwo.png";
import iphoneStepThree from "@/assets/iphoneStepThree.png";
import iphoneStepFour from "@/assets/iphoneStepFour.jpg";
import iphoneWarning from "@/assets/iphoneWarning.jpg";
import { RiSafariLine } from "react-icons/ri";

const IosIntallationTab = () => {
  return (
    <article>
      <header>
        <div className="mb-4 flex items-center gap-2">
          <RiSafariLine className="h-8 w-8 fill-white" />
          <h2 className=" text-3xl">Safari</h2>
        </div>
      </header>
      <main>
        <div>
          <p className="mb-4 text-neutral-content">
            Если вы перешли на сайт по ссылке из социальных сетей, то перед
            выполнением дальнейших действий, вам необходимо коснуться иконки
            Safari в правой нижней части экрана в строке меню
          </p>
          <Image
            src={iphoneWarning}
            alt="safari button"
            className="inline align-middle"
          />
        </div>

        <div className="divider"></div>

        <div>
          <h3 className="mb-2  text-xl font-bold ">Шаг 1 </h3>
          <p className="mb-4 text-neutral-content">
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

        <div className="divider"></div>

        <div>
          <h3 className="mb-2 text-xl font-bold  ">Шаг 2 </h3>
          <p className="mb-4 text-neutral-content">
            Прокрутите вниз список параметров, затем коснитесь «На экран
            &quot;Домой&quot;».
          </p>
          <Image src={iphoneStepTwo} alt="step two" />
        </div>

        <div className="divider"></div>

        <div>
          <h3 className="mb-2 text-xl  font-bold  ">Шаг 2.1 </h3>
          <p className="mb-4 text-neutral-content">
            Осталось лишь коснуться кнопки &quot;добавить&quot;
          </p>
          <Image src={iphoneStepThree} alt="step two" />
        </div>

        <div className="divider"></div>

        <div>
          <h3 className="mb-2 text-xl  font-bold   ">🎉 Та-дааааа</h3>
          <p className="mb-4 text-neutral-content">
            Теперь от расписания вас отделяет лишь одно касание
          </p>
          <Image src={iphoneStepFour} alt="step four" />
        </div>
      </main>
    </article>
  );
};

export default IosIntallationTab;
