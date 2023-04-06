import {
  AndroidInstallationTab,
  ComputerInstallationTab,
  IosIntallationTab,
  Tabs,
} from "@/components";
import { HomeButton } from "@/components";
import { RiAppleLine, RiAndroidLine, RiMacbookLine } from "react-icons/ri";

const Install = async () => {
  return (
    <div className=" relative min-h-screen px-4 py-8" data-theme="dracula">
      <div className="mx-auto max-w-lg">
        <header className="mb-8">
          <h1 className="  text-gradient text-5xl font-bold   text-primary max-sm:text-center  ">
            Установка uniSchedule
          </h1>
        </header>
        <main>
          <Tabs
            titles={["iPhone & iPad", "Android", "Mac & Windows"]}
            icons={[
              <RiAppleLine key={0} className="h-7 w-7" />,
              <RiAndroidLine key={1} className="h-7 w-7" />,
              <RiMacbookLine key={2} className="h-7 w-7" />,
            ]}
          >
            <IosIntallationTab />
            <AndroidInstallationTab />
            <ComputerInstallationTab />
          </Tabs>
        </main>
        <HomeButton />
      </div>
    </div>
  );
};

export default Install;
