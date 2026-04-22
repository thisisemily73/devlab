"use client";

import { useState } from "react";

export default function CurrencyTool() {
  const [currency, setCurrency] = useState("");

  const prefixes = ["Neo", "Dark", "Solar", "Cyber", "Arc"];
  const suffixes = ["Coins", "Cash", "Credits", "Gems", "Bits"];

  const generate = () => {
    const p = prefixes[Math.floor(Math.random() * prefixes.length)];
    const s = suffixes[Math.floor(Math.random() * suffixes.length)];
    setCurrency(`${p}${s}`);
  };

  return (
    <div className="space-y-4">

      <button
        onClick={generate}
        className="bg-white text-black px-3 py-1 rounded-md text-sm"
      >
        Generate Currency
      </button>

      {currency && (
        <div className="bg-zinc-800 p-3 rounded-md text-sm">
          {currency}
        </div>
      )}

    </div>
  );
}