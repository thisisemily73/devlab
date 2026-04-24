"use client";

import { useState } from "react";
import { useProjects } from "@/hooks/useProjects";
import ConfirmModal from "@/components/ConfirmModal";

export default function ProjectsPage() {
  const { projects, deleteProject } = useProjects();

  const [confirmOpen, setConfirmOpen] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const openDelete = (id: string) => {
    setDeleteId(id);
    setConfirmOpen(true);
  };

  const confirmDelete = () => {
    if (!deleteId) return;

    deleteProject(deleteId);

    setDeleteId(null);
    setConfirmOpen(false);
  };

  return (
    <div className="space-y-6">

      <h1 className="text-3xl font-bold">Your Games</h1>

      {projects.length === 0 && (
        <p className="text-zinc-400">No games yet.</p>
      )}

      {projects.map((p) => (
        <div
          key={p.id}
          className="bg-zinc-900 p-4 rounded-xl hover:bg-zinc-800 transition"
        >

          <h2 className="font-semibold text-lg">{p.name}</h2>

          {p.idea && (
            <p className="text-sm text-zinc-400 mt-1">
              {p.idea}
            </p>
          )}

          {/* TOOLS */}
          <div className="mt-3">
            <p className="text-xs text-zinc-500 mb-1">
              TOOLS
            </p>

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

          {/* ACTIONS */}
          <div className="mt-3 flex gap-3">

            <a
              href={`/projects/${p.id}`}
              className="text-xs text-zinc-300 hover:text-white"
            >
              Open
            </a>

            <button
              onClick={() => openDelete(p.id)}
              className="text-xs text-red-400 hover:text-red-300"
            >
              Delete
            </button>

          </div>

        </div>
      ))}

      {/* CONFIRM MODAL */}
      <ConfirmModal
        open={confirmOpen}
        title="Delete this game?"
        description="This action cannot be undone."
        onCancel={() => setConfirmOpen(false)}
        onConfirm={confirmDelete}
      />

    </div>
  );
}