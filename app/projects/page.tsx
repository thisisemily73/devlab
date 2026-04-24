"use client";

import { useProjects } from "@/hooks/useProjects";

export default function ProjectsPage() {
  const { projects } = useProjects();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Your Games</h1>

      {projects.length === 0 && (
        <p className="text-zinc-400">No games yet.</p>
      )}

      {projects.map((p) => (
        <div key={p.id} className="bg-zinc-900 p-4 rounded-xl">
          <h2 className="font-semibold text-lg">{p.name}</h2>

          {p.idea && (
            <p className="text-sm text-zinc-400 mt-1">{p.idea}</p>
          )}

          <div className="mt-3">
            <p className="text-xs text-zinc-500 mb-1">TOOLS</p>

            <div className="flex flex-wrap gap-2">
              {p.tools.length === 0 ? (
                <span className="text-xs text-zinc-600">
                  No tools added yet
                </span>
              ) : (
                p.tools.map((t, i) => (
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
        </div>
      ))}
    </div>
  );
}