"use client";

import { useState } from "react";

export default function GameIdeaTool() {
  const [idea, setIdea] = useState<any | null>(null);

  const genres = ["Horror", "Adventure", "Survival", "Obby"];
  const twists = [
    "You can only move when not watched",
    "The map changes every minute",
    "Sound attracts enemies"
  ];

  const generate = () => {
    setIdea({
      genre: genres[Math.floor(Math.random() * genres.length)],
      twist: twists[Math.floor(Math.random() * twists.length)],
    });
  };

  return (
    <div className="space-y-4">

      <button
        onClick={generate}
        className="bg-white text-black px-3 py-1 rounded-md text-sm"
      >
        Generate Idea
      </button>

      {idea && (
        <div className="bg-zinc-800 p-3 rounded-md text-sm">
          <p><b>Genre:</b> {idea.genre}</p>
          <p><b>Twist:</b> {idea.twist}</p>
        </div>
      )}

    </div>
  );
}