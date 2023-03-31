"use client";
<<<<<<< HEAD
import type { Workbox } from "workbox-window";
import { useEffect } from "react";

declare global {
  interface Window {
    workbox: Workbox;
  }
}

const ServiceWorkerWrapper = () => {
  useEffect(() => {
    if ("serviceWorker" in navigator && window.workbox !== undefined) {
      const wb = window.workbox;
      wb.register();
    }
  }, []);
=======

const ServiceWorkerWrapper = () => {
  window.addEventListener("load", async () => {
    if ("serviceWorker" in navigator) {
      try {
        await navigator.serviceWorker.register("/sw.js");
        console.log("sw SUCCESS");
      } catch (e) {
        console.log("sw error");
      }
    }
  });

>>>>>>> master
  return <></>;
};

export default ServiceWorkerWrapper;
