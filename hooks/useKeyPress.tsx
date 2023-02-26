"use client";
import { useCallback, useEffect, useLayoutEffect, useRef } from "react";

type UseKeyPressProps = {
  node?: any;
  hotkey?: string;
  keys?: string[];
  callback: (ev: KeyboardEvent) => void;
};

export const useKeyPress = (props: UseKeyPressProps) => {
  // implement the callback ref pattern

  const { callback, keys, node, hotkey } = props;
  const callbackRef = useRef(callback);

  useLayoutEffect(() => {
    callbackRef.current = callback;
  });

  // handle what happens on key press
  const handleKeyPress = useCallback(
    function (this: Document, ev: KeyboardEvent) {
      if (hotkey) {
        let mainKey: boolean;

        switch (hotkey.split("+")[0]) {
          case "ctrl":
            mainKey = ev.ctrlKey;
          case "shift":
            mainKey = ev.shiftKey;
          case "alt":
            mainKey = ev.altKey;
          default:
            mainKey = ev.ctrlKey;
        }

        if (ev.key === hotkey.split("+")[1].toLowerCase() && mainKey) {
          ev.preventDefault();
          ev.stopPropagation();
          callbackRef.current(ev);
        }
      }

      if (keys && keys.some((key) => ev.key === key)) {
        callbackRef.current(ev);
        console.log(ev.key);
      }
    },
    [keys, hotkey]
  );

  useEffect(() => {
    // target is either the provided node or the document
    const targetNode: Document = node ?? document;
    // attach the event listener
    targetNode && targetNode.addEventListener("keydown", handleKeyPress);

    // remove the event listener
    return () =>
      targetNode && targetNode.removeEventListener("keydown", handleKeyPress);
  }, [handleKeyPress, node]);
};
