"use client";

import { useState } from "react";

export default function GameNameTool() {
  const [name, setName] = useState("");

  const adjectives = ["Broken", "Silent", "Lost", "Infinite", "Forgotten"];
  const nouns = ["Facility", "World", "Night", "Protocol", "Zone"];

  const generate = () => {
    const a = adjectives[Math.floor(Math.random() * adjectives.length)];
    const n = nouns[Math.floor(Math.random() * nouns.length)];
    setName(`${a} ${n}`);
  };

  return (
    <div className="space-y-4">

      <button
        onClick={generate}
        className="bg-white text-black px-3 py-1 rounded-md text-sm"
      >
        Generate Game Name
      </button>

      {name && (
        <div className="bg-zinc-800 p-3 rounded-md text-sm">
          {name}
        </div>
      )}

    </div>
  );
}