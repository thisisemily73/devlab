"use client";

import { useState, useEffect } from "react";
import {
  GENRES,
  TWISTS,
  GOALS,
  MECHANICS,
  COMPLICATIONS,
  AESTHETICS,
  SETTINGS,
} from "@/lib/ideaData";
import { useToast } from "@/components/Toast";
import { useProjects } from "@/hooks/useProjects";

import CreateProjectModal from "@/components/CreateProjectModal";


type IdeaSection = "pitch" | "hook" | "objective" | "difficulty" | "look";

const SECTIONS: IdeaSection[] = [
  "pitch",
  "hook",
  "objective",
  "difficulty",
  "look",
];

type Idea = Partial<Record<IdeaSection, string>>;

export default function GameIdeaTool() {
  const { showToast } = useToast();

  const [idea, setIdea] = useState<Idea>({});
  const [saved, setSaved] = useState<Idea[]>([]);

  const { create } = useProjects();

  const [selected, setSelected] = useState<Record<IdeaSection, boolean>>({
    pitch: true,
    hook: true,
    objective: true,
    difficulty: false,
    look: false,
  });

  const pick = (arr: string[]) =>
    arr[Math.floor(Math.random() * arr.length)];

  const toggle = (key: IdeaSection) => {
    setSelected((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };


  const [showCreateModal, setShowCreateModal] = useState(false);
  const [pendingIdeaText, setPendingIdeaText] = useState("");

  // ----------------------------
  // GENERATORS (SAFE VERSION)
  // ----------------------------
  const makeSection = (key: IdeaSection): string => {
    switch (key) {
      case "pitch":
        return `A ${pick(GENRES)} game set in ${pick(SETTINGS)}.`;
      case "hook":
        return pick(TWISTS);
      case "objective":
        return `The goal is to ${pick(GOALS)} while managing ${pick(MECHANICS)}.`;
      case "difficulty":
        return `To make it harder: ${pick(COMPLICATIONS)}.`;
      case "look":
        return `Visual style: ${pick(AESTHETICS)}.`;
    }
  };

  // ----------------------------
  // GENERATE FULL IDEA
  // ----------------------------
  const generateIdea = (): Idea => {
    const result: Idea = {};

    SECTIONS.forEach((key) => {
      if (selected[key]) {
        result[key] = makeSection(key);
      }
    });

    return result;
  };

  // ----------------------------
  // REGENERATE SINGLE PART (FIXED)
  // ----------------------------
  const regeneratePart = (key: IdeaSection) => {
    setIdea((prev) => {
      if (!prev) return prev;

      return {
        ...prev,
        [key]: makeSection(key),
      };
    });
  };

  // ----------------------------
  // LOAD DAILY IDEA
  // ----------------------------
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

    const newIdea = generateIdea();

    localStorage.setItem(
      "dailyIdea",
      JSON.stringify({ date: today, idea: newIdea })
    );

    setIdea(newIdea);
  }, []);

  // ----------------------------
  // LOAD SAVED
  // ----------------------------
  useEffect(() => {
    const data = localStorage.getItem("savedIdeas");
    if (data) setSaved(JSON.parse(data));
  }, []);

  // ----------------------------
  // ACTIONS
  // ----------------------------
  const generate = () => {
    setIdea(generateIdea());
  };

  const saveIdea = () => {
    if (!idea) return;

    const updated = [idea, ...saved];
    setSaved(updated);
    localStorage.setItem("savedIdeas", JSON.stringify(updated));

    showToast("Saved");
  };

  const copyIdea = () => {
    if (!idea) return;

    const text = Object.values(idea).join(" ");
    navigator.clipboard.writeText(text);

    showToast("Copied!");
  };

  const startGame = () => {
  if (!idea) {
    showToast("Generate an idea first!");
    return;
  }

  const text = Object.values(idea).join(" ");

  setPendingIdeaText(text);
  setShowCreateModal(true);
};

const handleCreateProject = (title: string) => {
  const project = create(title, pendingIdeaText);

  setShowCreateModal(false);

  showToast("Project created!", [
    {
      label: "Undo",
      onClick: () => {
        const confirmUndo = confirm("Are you sure?");
        if (!confirmUndo) return;

        const all = JSON.parse(localStorage.getItem("projects") || "[]");
        const filtered = all.filter((p: any) => p.id !== project.id);

        localStorage.setItem("projects", JSON.stringify(filtered));
      },
    },
    {
      label: "Go to project",
      onClick: () => {
        window.location.href = `/projects/${project.id}`;
      },
    },
  ]);
};

  // ----------------------------
  // UI
  // ----------------------------
  return (
    <div className="space-y-4">
      <p className="text-xs text-zinc-500">Today’s Idea</p>

      {/* TOGGLES */}
      <div className="flex flex-wrap gap-2">
        {SECTIONS.map((key) => (
          <button
            key={key}
            onClick={() => toggle(key)}
            className={`px-3 py-1 rounded-full text-xs transition ${selected[key]
              ? "bg-white text-black"
              : "bg-zinc-800 text-zinc-400"
              }`}
          >
            {key}
          </button>
        ))}
      </div>

      {/* ACTIONS */}
      <div className="flex gap-2 flex-wrap">
        <button
          onClick={generate}
          className="bg-white text-black px-3 py-1 rounded-md text-sm"
        >
          🔁 Generate
        </button>

        <button
          onClick={saveIdea}
          className="bg-zinc-700 text-white px-3 py-1 rounded-md text-sm"
        >
          💾 Save
        </button>

        <button
          onClick={copyIdea}
          className="bg-zinc-700 text-white px-3 py-1 rounded-md text-sm"
        >
          📋 Copy
        </button>

        <button
          onClick={startGame}
          className="bg-green-500 text-black px-3 py-1 rounded-md text-sm font-semibold"
        >
          ⚡ Start This Game
        </button>
      </div>

      {/* IDEA */}
      {idea && (
        <div className="bg-zinc-800 p-3 rounded-md text-sm space-y-2">
          {SECTIONS.map((key) =>
            idea[key] ? (
              <div key={key} className="flex justify-between items-center">
                <p>
                  <b className="capitalize">{key}:</b> {idea[key]}
                </p>

                <button
                  onClick={() => regeneratePart(key)}
                  className="text-xs text-zinc-500 hover:text-white"
                >
                  ↻
                </button>
              </div>
            ) : null
          )}
        </div>
      )}

      {/* SAVED */}
      {saved.length > 0 && (
        <div className="mt-4 space-y-2">
          <p className="text-xs text-zinc-400">Saved Ideas</p>

          {saved.slice(0, 3).map((s, i) => (
            <div
              key={i}
              className="bg-zinc-800 p-2 rounded text-xs flex justify-between items-center"
            >
              <span>{Object.values(s).join(" ").slice(0, 60)}...</span>

              <button
                onClick={() => {
                  const updated = saved.filter((_, index) => index !== i);
                  setSaved(updated);
                  localStorage.setItem("savedIdeas", JSON.stringify(updated));
                }}
                className="text-zinc-500 hover:text-red-400 transition text-xs"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}

      <CreateProjectModal
        open={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        onCreate={handleCreateProject}
        ideaText={pendingIdeaText}
      />

    </div>
  );
}