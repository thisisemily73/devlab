"use client";

import { createContext, useContext, useState } from "react";
import React from "react";

type ToastAction = {
  label: string;
  onClick: () => void;
};

type ToastContextType = {
  showToast: (message: string, actions?: ToastAction[]) => void;
};

const ToastContext = createContext<ToastContextType | null>(null);

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used inside ToastProvider");
  return ctx;
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [message, setMessage] = useState("");
  const [actions, setActions] = useState<ToastAction[]>([]);
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  const showToast = (msg: string, actions?: ToastAction[]) => {
    setMessage(msg);
    setActions(actions || []);
    setMounted(true);

    setTimeout(() => setVisible(true), 10);

    // DO NOT auto-close anymore if actions exist
    if (!actions || actions.length === 0) {
      setTimeout(() => setVisible(false), 2000);
      setTimeout(() => setMounted(false), 2300);
    }
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
      z-[9999]
      ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
    `}
        >
          <div className="flex flex-col gap-2">
            <span>{message}</span>

            {actions.length > 0 && (
              <div className="flex gap-3 text-xs underline">
                {actions.map((a, i) => (
                  <button
                    key={i}
                    onClick={a.onClick}
                    className="hover:text-white text-zinc-300"
                  >
                    {a.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </ToastContext.Provider>
  );
}