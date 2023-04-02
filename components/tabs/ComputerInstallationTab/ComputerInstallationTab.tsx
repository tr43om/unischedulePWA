import React from "react";
import Image from "next/image";
import installIcon from "@/assets/installDesktopIcon.png";
import pcStep1 from "@/assets/pcStep1.png";
import pcStep2 from "@/assets/pcStep2.png";
import pcStep3 from "@/assets/pcStep3.png";

const ComputerInstallationTab = () => {
  return (
    <section className="grid gap-14">
      <div>
        <h3 className="mb-2  text-xl font-bold "> Шаг 1</h3>
        <p className="mb-4 flex items-center gap-1">
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
      <div>
        <h3 className="mb-2 text-xl font-bold  ">Шаг 2</h3>
        <p className="mb-4">Нажмите на кнопку &quot;Установить&quot;</p>
        <Image src={pcStep2} alt="step 2" />
      </div>

      <div>
        <h3 className="mb-2 text-xl  font-bold  ">🎉 Та-даааа</h3>
        <p className="mb-4">
          И наконец, кликните правой кнопкой мыши по значку приложения и
          выберите опцию &quot;Закрепить на панели задач&quot;, чтобы приложение
          было всегда навиду
        </p>
        <Image src={pcStep3} alt="step 3" />
      </div>
    </section>
  );
};

export default ComputerInstallationTab;
