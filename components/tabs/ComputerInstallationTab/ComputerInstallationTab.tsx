import React from "react";
import Image from "next/image";
import installIcon from "@/assets/installDesktopIcon.png";
import pcStep1 from "@/assets/pcStep1.png";
import pcStep2 from "@/assets/pcStep2.png";
import pcStep3 from "@/assets/pcStep3.png";
import { RiChromeLine } from "react-icons/ri";

const ComputerInstallationTab = () => {
  return (
    <article>
      <header>
        <div className="mb-4 flex items-center gap-2">
          <RiChromeLine className="h-8 w-8 fill-white" />
          <h2 className=" text-3xl">Chrome</h2>
        </div>
      </header>
      <main>
        <div>
          <h3 className="mb-2  text-xl font-bold "> Шаг 1</h3>
          <p className="mb-4 flex items-center gap-1 text-neutral-content">
            В правом верхнем углу адресной строки нажмите на значок
            &quot;Установить&quot;{" "}
            <Image
              src={installIcon}
              alt="install icon"
              className="h-8 w-8 invert"
            />
          </p>
          <Image src={pcStep1} alt="step 1" />
        </div>
        <div className="divider"></div>
        <div>
          <h3 className="mb-2 text-xl font-bold  ">Шаг 2</h3>
          <p className="mb-4 text-neutral-content">
            Нажмите на кнопку &quot;Установить&quot;
          </p>
          <Image src={pcStep2} alt="step 2" />
        </div>
        <div className="divider"></div>
        <div>
          <h3 className="mb-2 text-xl  font-bold  ">🎉 Та-даааа</h3>
          <p className="mb-4 text-neutral-content">
            И наконец, кликните правой кнопкой мыши по значку приложения и
            выберите опцию &quot;Закрепить на панели задач&quot;, чтобы
            приложение было всегда навиду
          </p>
          <Image src={pcStep3} alt="step 3" />
        </div>
      </main>
    </article>
  );
};

export default ComputerInstallationTab;
