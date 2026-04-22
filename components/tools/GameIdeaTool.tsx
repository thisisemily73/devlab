"use client";

import { useState } from "react";
import { genres, twists, goals, mechanics } from "@/lib/ideaData";

export default function GameIdeaTool() {
  const [idea, setIdea] = useState<any | null>(null);

  const generate = () => {
    setIdea({
      genre: genres[Math.floor(Math.random() * genres.length)],
      twist: twists[Math.floor(Math.random() * twists.length)],
      goals: goals[Math.floor(Math.random() * goals.length)],
      mechanics: mechanics[Math.floor(Math.random() * mechanics.length)]
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
          <p><b>Goal:</b> {idea.goals}</p>
          <p><b>Mechanic:</b> {idea.mechanics}</p>
        </div>
      )}

    </div>
  );
}