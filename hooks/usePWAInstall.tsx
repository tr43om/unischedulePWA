import { useEffect, useState } from "react";

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;
  prompt(): Promise<void>;
}

interface Options {
  acceptedFn?: () => void;
  dismissedFn?: () => void;
  installedFn?: () => void;
}

interface ReturnType {
  isInstalled: boolean;
  install: () => Promise<false | void>;
}

declare global {
  interface WindowEventMap {
    beforeinstallprompt: BeforeInstallPromptEvent;
  }
}

export const usePWAInstall = (options?: Options): ReturnType => {
  const {
    acceptedFn = () => console.log("User accepted the A2HS prompt"),
    dismissedFn = () => console.log("User dismissed the A2HS prompt"),
    installedFn = () => console.log("Already installed"),
  } = { ...options };
  const [beforeInstallPromptEvent, setBeforeInstallPromptEvent] =
    useState<BeforeInstallPromptEvent>();
  const [isInstalled, setIsInstalled] = useState(false);

  const install = async () => {
    console.log("clicked install");
    console.log(beforeInstallPromptEvent);
    if (!beforeInstallPromptEvent) return false;
    console.log("before install");

    beforeInstallPromptEvent.prompt();

    const { outcome } = await beforeInstallPromptEvent.userChoice;

    if (outcome === "accepted") {
      setIsInstalled(true);
      acceptedFn();
    } else {
      dismissedFn();
    }
  };
  const handler = (e: BeforeInstallPromptEvent) => {
    console.log("handler");
    e.preventDefault();
    console.log("handler");
    console.log("handler");
    console.log(e);
    setBeforeInstallPromptEvent(e);
  };
  window.addEventListener("beforeinstallprompt", handler);

  //   useEffect(() => {
  //     if (!beforeInstallPromptEvent) {
  //       setIsInstalled(true);
  //       installedFn();
  //     } else {
  //       setIsInstalled(false);
  //     }

  //     return () => {
  //       window.removeEventListener("beforeinstallprompt", handler);
  //     };
  //   }, [installedFn, beforeInstallPromptEvent]);

  //   useEffect(() => {
  //     const handler = () => {
  //       setIsInstalled(true);
  //       // For apply setIsInstalled(true) when install and popup new pwa
  //       window.location.reload();
  //     };

  //     window.addEventListener("appinstalled", handler);

  //     return () => {
  //       window.removeEventListener("appinstalled", handler);
  //     };
  //   }, []);

  return { isInstalled, install };
};
