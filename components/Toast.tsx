"use client";

import { createContext, useContext, useState, useEffect } from "react";

type ToastContextType = {
  showToast: (message: string) => void;
};

const ToastContext = createContext<ToastContextType | null>(null);

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used inside ToastProvider");
  return ctx;
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [message, setMessage] = useState("");
  const [mounted, setMounted] = useState(false); // controls render
  const [visible, setVisible] = useState(false); // controls animation

  const showToast = (msg: string) => {
    setMessage(msg);
    setMounted(true);

    // let it mount FIRST, then animate in
    setTimeout(() => {
      setVisible(true);
    }, 10);

    // start exit
    setTimeout(() => {
      setVisible(false);
    }, 1000);

    // unmount AFTER exit animation
    setTimeout(() => {
      setMounted(false);
    }, 1300);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      {mounted && (
        <div
          className={`
            fixed bottom-6 left-1/2 -translate-x-1/2
            px-4 py-2 rounded-lg text-sm bg-zinc-800 text-white
            transition-all duration-300 ease-out

            ${visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"}
          `}
        >
          {message}
        </div>
      )}
    </ToastContext.Provider>
  );
}