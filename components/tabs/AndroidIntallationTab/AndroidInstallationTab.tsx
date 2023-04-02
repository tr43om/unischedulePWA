import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import React from "react";
import androidInstall from "@/assets/androidInstall.jpg";
import androidStep1 from "@/assets/androidStep1.jpg";
import androidStep2 from "@/assets/androidStep2.png";
import androidStep3 from "@/assets/androidStep3.jpg";
import Image from "next/image";

const AndroidInstallationTab = () => {
  return (
    <section className="grid ">
      {/* <div>
        <p className="mb-4">
          При первом посещении сайта, в нижней части экрана должен появиться
          баннер с предложением установки приложения
        </p>
        <Image src={androidInstall} alt="installable" className="mb-4" />
        <p className="mb-4">
          Если баннер так и не появился или вы его закрыли, следуйте инструкции
          ниже
        </p>
      </div> */}

      <main className="grid gap-14">
        <div>
          <h3 className="mb-2  text-xl font-bold ">Шаг 1</h3>
          <p className="mb-4">
            При переходе на веб-сайт коснитесь кнопки
            <EllipsisVerticalIcon className="inline h-7 w-7" /> в правом верхнем
            углу экрана
          </p>
          <Image src={androidStep1} alt="step one" />
        </div>
        <div>
          <h3 className="mb-2 text-xl font-bold  ">Шаг 2</h3>
          <p className="mb-4">В списке выберите «Установить приложение»</p>
          <Image src={androidStep2} alt="step two" />
        </div>

        <div>
          <h3 className="mb-2 text-xl  font-bold  ">Шаг 2.1</h3>
          <p className="mb-4">
            Осталось лишь коснуться кнопки &quot;установить&quot;
          </p>
          <Image src={androidStep3} alt="step three" />
        </div>
      </main>
    </section>
  );
};

export default AndroidInstallationTab;
