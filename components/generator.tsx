"use client";

import { useState } from "react";
import { genres, twists, goals, mechanics } from "@/lib/ideaData";

type Idea = {
  genre: string;
  twist: string;
  goal: string;
  mechanic: string;
};

export default function Generator() {
  const [idea, setIdea] = useState<Idea | null>(null);

  const generateIdea = () => {
    const newIdea: Idea = {
      genre: genres[Math.floor(Math.random() * genres.length)],
      twist: twists[Math.floor(Math.random() * twists.length)],
      goal: goals[Math.floor(Math.random() * goals.length)],
      mechanic: mechanics[Math.floor(Math.random() * mechanics.length)],
    };

    setIdea(newIdea);
  };

  const copyIdea = () => {
    if (!idea) return;

    const text = `
Genre: ${idea.genre}
Twist: ${idea.twist}
Goal: ${idea.goal}
Mechanic: ${idea.mechanic}
    `.trim();

    navigator.clipboard.writeText(text);
  };

  return (
    <div className="flex flex-col items-center">
      
      <button
        onClick={generateIdea}
        className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
      >
        Generate Idea
      </button>

      {idea && (
        <div className="mt-8">
          
          <div className="bg-zinc-900 p-5 rounded-xl max-w-md w-full text-left space-y-2">
            <p><strong>Genre:</strong> {idea.genre}</p>
            <p><strong>Twist:</strong> {idea.twist}</p>
            <p><strong>Goal:</strong> {idea.goal}</p>
            <p><strong>Mechanic:</strong> {idea.mechanic}</p>
          </div>

          <button
            onClick={copyIdea}
            className="mt-4 bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-lg transition"
          >
            Copy Idea
          </button>

        </div>
      )}
    </div>
  );
}