"use client";

import { useParams } from "next/navigation";
import { useProjects } from "@/hooks/useProjects";
import { tools } from "@/lib/toolsData";
import { useState } from "react";

export default function ProjectPage() {
  const { id } = useParams();
  const { projects, addTool } = useProjects();

  const project = projects.find((p) => p.id === id);
  const [search, setSearch] = useState("");

  const filteredTools = tools.filter((t) =>
    t.name.toLowerCase().includes(search.toLowerCase())
  );

  const getRecommended = () => {
    if (!project?.idea) return [];

    const idea = project.idea.toLowerCase();

    return tools.filter((t) => {
      if (idea.includes("npc") && t.name.toLowerCase().includes("npc")) return true;
      if (idea.includes("ui") && t.name.toLowerCase().includes("ui")) return true;
      if (idea.includes("inventory") && t.name.toLowerCase().includes("inventory")) return true;
      if (idea.includes("multiplayer") && t.name.toLowerCase().includes("network")) return true;
      return false;
    });
  };

  const recommended = getRecommended();

  const checklist = [
    "Core Gameplay",
    "UI System",
    "Player Controls",
    "NPC / AI",
    "Saving System"
  ];


  if (!project) {
    return <p className="text-zinc-400">Project not found</p>;
  }

  return (
    <div className="space-y-6">

      <h1 className="text-3xl font-bold">{project.name}</h1>

      {project.idea && (
        <p className="text-zinc-400">{project.idea}</p>
      )}

      <div className="bg-zinc-900 p-4 rounded-xl">
        <h2 className="text-sm text-zinc-400 mb-2">TOOLS</h2>

        <div className="flex flex-wrap gap-2">
          {project.tools.length === 0 ? (
            <p className="text-zinc-600 text-sm">
              No tools yet
            </p>
          ) : (
            project.tools.map((t, i) => (
              <span
                key={i}
                className="bg-zinc-800 px-2 py-1 rounded text-xs"
              >
                {t}
              </span>
            ))
          )}
        </div>
      </div>

      <div className="mt-8 space-y-3">

        <h2 className="text-sm text-zinc-400">
          Add Tools to This Game
        </h2>

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search tools..."
          className="w-full bg-zinc-900 border border-zinc-800 px-3 py-2 rounded-md text-sm"
        />

        <div className="grid gap-2">
          {filteredTools.map((t) => (
            <button
              key={t.id}
              onClick={() => addTool(project.id, t.name)}
              className="flex justify-between items-center bg-zinc-900 hover:bg-zinc-800 p-3 rounded-md text-sm"
            >
              <span>{t.name}</span>
              <span className="text-xs text-zinc-500">Add</span>
            </button>
          ))}
        </div>
      </div>

      {recommended.length > 0 && (
        <div className="mt-6">

          <h2 className="text-sm text-zinc-400 mb-2">
            Recommended for this game
          </h2>

          <div className="space-y-2">
            {recommended.map((t) => (
              <button
                key={t.id}
                onClick={() => addTool(project.id, t.name)}
                className="w-full flex justify-between bg-zinc-900 hover:bg-zinc-800 p-3 rounded-md text-sm"
              >
                <span>{t.name}</span>
                <span className="text-xs text-green-400">Recommended</span>
              </button>
            ))}
          </div>

        </div>
      )}

      {/* CHECKLIST UI */}
      <div className="mt-8 bg-zinc-900 p-4 rounded-xl">

        <h2 className="text-sm text-zinc-400 mb-3">
          Game Progress
        </h2>

        <div className="space-y-2">
          {checklist.map((item) => {
            const done = project.tools.some((t) =>
              item.toLowerCase().includes(t.toLowerCase())
            );

            return (
              <div
                key={item}
                className="flex justify-between text-sm"
              >
                <span>{item}</span>
                <span className={done ? "text-green-400" : "text-zinc-600"}>
                  {done ? "Done" : "Missing"}
                </span>
              </div>
            );
          })}
        </div>

      </div>

    </div>
  );
}