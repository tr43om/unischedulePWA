import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import React from "react";
import androidInstall from "@/assets/androidInstall.jpg";
import androidStep1 from "@/assets/androidStep1.jpg";
import androidStep2 from "@/assets/androidStep2.png";
import androidStep3 from "@/assets/androidStep3.jpg";
import Image from "next/image";
import { RiChromeLine } from "react-icons/ri";

const AndroidInstallationTab = () => {
  return (
    <article>
      <header>
        <div className="mb-4 flex items-center gap-2">
          <RiChromeLine className="h-8 w-8 fill-white" />
          <h2 className=" text-3xl">Chrome</h2>
        </div>

        <div>
          <p className="mb-4 text-neutral-content">
            При первом посещении сайта, в нижней части экрана должен появиться
            баннер с предложением установки приложения
          </p>
          <Image src={androidInstall} alt="installable" className="mb-4" />
          <p className="mb-4 text-neutral-content">
            Если баннер так и не появился или вы его закрыли, следуйте
            инструкции ниже
          </p>
        </div>
      </header>

      <div className="divider"></div>

      <main>
        <div>
          <h3 className="mb-2  text-xl font-bold ">Шаг 1</h3>
          <p className="mb-4 text-neutral-content">
            При переходе на веб-сайт коснитесь кнопки
            <EllipsisVerticalIcon className="inline h-7 w-7" /> в правом верхнем
            углу экрана
          </p>
          <Image src={androidStep1} alt="step one" />
        </div>

        <div className="divider"></div>

        <div>
          <h3 className="mb-2 text-xl font-bold  ">Шаг 2</h3>
          <p className="mb-4 text-neutral-content">
            В списке выберите «Установить приложение»
          </p>
          <Image src={androidStep2} alt="step two" />
        </div>

        <div className="divider"></div>

        <div>
          <h3 className="mb-2 text-xl  font-bold  ">Шаг 2.1</h3>
          <p className="mb-4 text-neutral-content">
            Осталось лишь коснуться кнопки &quot;установить&quot;
          </p>
          <Image src={androidStep3} alt="step three" />
        </div>
      </main>
    </article>
  );
};

export default AndroidInstallationTab;
