import {
  AndroidInstallationTab,
  ComputerInstallationTab,
  IosIntallationTab,
  Tabs,
} from "@/components";
import { HomeButton } from "@/components/ui/HomeButton";
import { ArrowDownOnSquareIcon } from "@heroicons/react/24/outline";

const Install = async () => {
  return (
    <div className=" min-h-screen px-4 py-8" data-theme="dracula">
      <div className="mx-auto max-w-lg">
        <header className="mb-8">
          <h1 className="  bg-gradient-to-r from-primary  to-[#726CF8] bg-clip-text   text-3xl font-bold text-transparent">
            Как установить uniSchedule
          </h1>
        </header>
        <main>
          <Tabs titles={["iPhone & iPad", "Android", "Computer"]}>
            <IosIntallationTab />
            <AndroidInstallationTab />
            <ComputerInstallationTab />
          </Tabs>
        </main>
      </div>
      <HomeButton />
    </div>
  );
};

export default Install;
