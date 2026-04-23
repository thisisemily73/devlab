"use client";

import { createContext, useContext, useState } from "react";

type ToastContextType = {
  showToast: (msg?: string) => void;
};

const ToastContext = createContext<ToastContextType | null>(null);

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used inside ToastProvider");
  return ctx;
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [message, setMessage] = useState<string | null>(null);

  const showToast = (msg = "Copied!") => {
    setMessage(msg);

    setTimeout(() => {
      setMessage(null);
    }, 2000);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      {/* TOAST UI */}
      <div
        className={`
          fixed bottom-6 left-1/2 -translate-x-1/2
          px-4 py-2 rounded-xl text-sm
          bg-zinc-900 border border-zinc-800 text-white
          shadow-xl shadow-black/50
          transition-all duration-300 ease-out

          ${message
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"}
        `}
      >
        {message}
      </div>
    </ToastContext.Provider>
  );
}