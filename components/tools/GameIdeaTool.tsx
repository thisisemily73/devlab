"use client";

import { useState, useEffect } from "react";
import { genres, twists, goals, mechanics, refineOptions } from "@/lib/ideaData";

export default function GameIdeaTool() {
  const [idea, setIdea] = useState<any | null>(null);
  const [saved, setSaved] = useState<any[]>([]);

  useEffect(() => {
    const today = new Date().toDateString();
    const stored = localStorage.getItem("dailyIdea");

    if (stored) {
      const parsed = JSON.parse(stored);
      if (parsed.date === today) {
        setIdea(parsed.idea);
        return;
      }
    }

    const newIdea = {
      genre: genres[Math.floor(Math.random() * genres.length)],
      twist: twists[Math.floor(Math.random() * twists.length)],
      goal: goals[Math.floor(Math.random() * goals.length)],
      mechanic: mechanics[Math.floor(Math.random() * mechanics.length)],
    };

    localStorage.setItem(
      "dailyIdea",
      JSON.stringify({ date: today, idea: newIdea })
    );

    setIdea(newIdea);
  }, []);

  useEffect(() => {
    const data = localStorage.getItem("savedIdeas");
    if (data) setSaved(JSON.parse(data));
  }, []);

  const generate = () => {
    setIdea({
      genre: genres[Math.floor(Math.random() * genres.length)],
      twist: twists[Math.floor(Math.random() * twists.length)],
      goal: goals[Math.floor(Math.random() * goals.length)],
      mechanic: mechanics[Math.floor(Math.random() * mechanics.length)]
    });
  };

  const refineIdea = () => {
    if (!idea) return;

    const option =
      refineOptions[Math.floor(Math.random() * refineOptions.length)];

    setIdea({
      ...idea,
      twist: idea.twist + " + " + option,
    });
  };

  const saveIdea = () => {
    if (!idea) return;

    const updated = [idea, ...saved];
    setSaved(updated);
    localStorage.setItem("savedIdeas", JSON.stringify(updated));
  };

  const deleteIdea = (index: number) => {
    const updated = saved.filter((_, i) => i !== index);
    setSaved(updated);
    localStorage.setItem("savedIdeas", JSON.stringify(updated));
  };

  const copyIdea = () => {
    if (!idea) return;

    navigator.clipboard.writeText(
      `Genre: ${idea.genre}
Twist: ${idea.twist}
Goal: ${idea.goal}
Mechanic: ${idea.mechanic}`
    );
  };

  return (
    <div className="space-y-4">

      <p className="text-xs text-zinc-500">
        Today’s Idea
      </p>

      <div className="flex gap-2">
        <button
          onClick={generate}
          className="bg-white text-black px-3 py-1 rounded-md text-sm"
        >
          Generate
        </button>

        <button
          onClick={refineIdea}
          className="bg-zinc-700 text-white px-3 py-1 rounded-md text-sm"
        >
          Refine
        </button>

        <button
          onClick={saveIdea}
          className="bg-zinc-700 text-white px-3 py-1 rounded-md text-sm"
        >
          Save
        </button>

        <button
          onClick={copyIdea}
          className="bg-zinc-700 text-white px-3 py-1 rounded-md text-sm"
        >
          Copy
        </button>
      </div>

      {idea && (
        <div className="bg-zinc-800 p-3 rounded-md text-sm space-y-1">
          <p><b>Genre:</b> {idea.genre}</p>
          <p><b>Twist:</b> {idea.twist}</p>
          <p><b>Goal:</b> {idea.goal}</p>
          <p><b>Mechanic:</b> {idea.mechanic}</p>
        </div>
      )}

      {saved.length > 0 && (
        <div className="mt-4 space-y-2">
          <p className="text-xs text-zinc-400">Saved Ideas</p>

          {saved.slice(0, 3).map((s, i) => (
            <div
              key={i}
              className="bg-zinc-800 p-2 rounded text-xs flex justify-between items-center"
            >
              <span>
                {s.genre} — {s.twist}
              </span>

              <button
                onClick={() => deleteIdea(i)}
                className="text-zinc-500 hover:text-red-400 transition text-xs"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}