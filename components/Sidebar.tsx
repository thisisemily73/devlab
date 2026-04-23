"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-56 border-r border-zinc-800 
    p-4 space-y-4 overflow-y-auto bg-zinc-900/50 backdrop-blur z-50">

      <Link href="/" className="hover:text-white">
        <h1 className="text-xl font-bold mb-6">DevLab</h1>
      </Link>

      <nav className="flex flex-col gap-3 text-sm">
        <Link href="/tools" className="hover:text-white text-zinc-400">
          🧰 Tools
        </Link>

        <Link href="/scripts" className="hover:text-white text-zinc-400">
          📜 Scripts
        </Link>

        <Link href="/ideas" className="hover:text-white text-zinc-400">
          🧠 Ideas
        </Link>
      </nav>

    </aside>
  );
}