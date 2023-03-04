"use client";

import { useEffect } from "react";

const ServiceWorkerWrapper = () => {
  useEffect(() => {
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
  });
  return null;
};

export default ServiceWorkerWrapper;
