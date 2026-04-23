"use client";

import { useState } from "react";
import { useToast } from "@/components/Toast";

export default function UsernameTool() {
  const [name, setName] = useState("");
  const { showToast } = useToast();

  const prefixes = ["xX", "Pro", "Dark", "Neo", "Ultra", "Crazy"];
  const roots = ["Pixel", "Ghost", "Shadow", "Nova", "Blade", "Storm"];
  const suffixes = ["YT", "Plays", "HD", "X", "Official", "Dev"];

  const generate = () => {
    const p = prefixes[Math.floor(Math.random() * prefixes.length)];
    const r = roots[Math.floor(Math.random() * roots.length)];
    const s = suffixes[Math.floor(Math.random() * suffixes.length)];

    setName(`${p}${r}${s}`);
  };

  const copyName = () => {
    if (!name) return;

    navigator.clipboard.writeText(name);
    showToast("Copied username ✅");
  };

  return (
    <div className="space-y-4">

      <button
        onClick={generate}
        className="bg-white text-black px-3 py-1 rounded-md text-sm"
      >
        Generate Username
      </button>

      {name && (
        <div className="bg-zinc-800 p-3 rounded-md text-sm flex justify-between items-center">

          <span>{name}</span>

          <button
            onClick={copyName}
            className="text-xs text-zinc-300 hover:text-white"
          >
            Copy
          </button>

        </div>
      )}

    </div>
  );
}