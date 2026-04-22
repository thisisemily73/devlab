"use client";

export default function ScriptsSearch({
  query,
  setQuery
}: {
  query: string;
  setQuery: (v: string) => void;
}) {
  return (
    <input
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search scripts..."
      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2 text-sm mb-4"
    />
  );
}