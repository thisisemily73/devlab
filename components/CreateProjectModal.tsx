"use client";

import { useState } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  onCreate: (title: string) => void;
  ideaText: string;
};

export default function CreateProjectModal({
  open,
  onClose,
  onCreate,
  ideaText,
}: Props) {
  const [title, setTitle] = useState("");

  if (!open) return null;


const words = ideaText.split(" ");

const pickWord = () =>
  words[Math.floor(Math.random() * words.length)] || "";

const generateName = () => {
  const formats = [
    () => `${pickWord()} Protocol`,
    () => `Project ${pickWord()}`,
    () => `${pickWord()} Syndrome`,
    () => `${pickWord()} Initiative`,
    () => `The ${pickWord()} Experiment`,
    () => `${pickWord()}: Reborn`,
  ];

  const name = formats[Math.floor(Math.random() * formats.length)]();

  setTitle(name.replace(/[^a-zA-Z0-9 ]/g, ""));
};

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-[10000]"
      onClick={onClose}
    >
      <div
        className="bg-zinc-900 rounded-xl p-5 w-full max-w-md space-y-4"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-lg font-semibold">Create Project</h2>

        {/* Title */}
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter project title..."
          className="w-full px-3 py-2 rounded-md bg-zinc-800 text-white outline-none"
        />

        <div className="flex justify-between items-center">
  <span className="text-xs text-zinc-500">Need a name?</span>

  <button
    onClick={generateName}
    className="text-xs text-zinc-400 hover:text-white underline"
  >
    🎲 Generate
  </button>
</div>

        {/* Idea Preview */}
        <div className="text-xs text-zinc-400 bg-zinc-800 p-3 rounded-md max-h-32 overflow-y-auto">
          {ideaText}
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="text-zinc-400 text-sm"
          >
            Cancel
          </button>

          <button
            onClick={() => {
              if (!title.trim()) return;
              onCreate(title);
              setTitle(""); // reset after create
            }}
            className="bg-white text-black px-3 py-1 rounded-md text-sm"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
}