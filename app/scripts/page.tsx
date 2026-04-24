"use client";

import { useState } from "react";
import { scripts as scriptData } from "@/lib/scriptsData";
import ScriptsSearch from "@/components/ScriptsSearch";
import { useToast } from "@/components/Toast";
import { useProjects } from "@/hooks/useProjects";

const { create } = useProjects();
const { showToast } = useToast();

export default function ScriptsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [query, setQuery] = useState("");

  const { showToast } = useToast();

  const copy = (code: string) => {
    navigator.clipboard.writeText(code);
    showToast("Copied!");
  };

  const toggleView = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filtered = scriptData.filter((s) =>
    s.name.toLowerCase().includes(query.toLowerCase()) ||
    s.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main className="flex flex-col items-center px-6 py-10">

      <h1 className="text-3xl font-bold mb-6">Scripts</h1>

      {/* SEARCH */}
      <div className="w-full max-w-2xl">
        <ScriptsSearch query={query} setQuery={setQuery} />
      </div>

      <div className="w-full max-w-2xl space-y-4">

        {filtered.map((s, i) => (
          <div key={i} className="bg-zinc-900 p-4 rounded-xl">

            <h2 className="font-semibold">{s.name}</h2>
            <p className="text-gray-400 text-sm">{s.desc}</p>

            {/* CATEGORY TAG */}
            <span className="text-xs text-zinc-400">
              {s.category}
            </span>

            <div className="flex gap-2 mt-3 mb-3">

              <button
                onClick={() => toggleView(i)}
                className="bg-zinc-800 hover:bg-zinc-700 px-3 py-1 rounded-md text-sm"
              >
                {openIndex === i ? "Hide Script" : "View Script"}
              </button>

              <button
                onClick={() => copy(s.code)}
                className="bg-white text-black px-3 py-1 rounded-md text-sm"
              >
                Copy Script
              </button>

            </div>

            {openIndex === i && (
              <pre className="bg-black p-3 rounded-md text-xs text-green-400 overflow-x-auto">
                {s.code}
              </pre>
            )}

          </div>
        ))}

      </div>

    </main>
  );
}