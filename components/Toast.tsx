"use client";

export default function Toast({ show }: { show: boolean }) {
  if (!show) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-zinc-800 text-white px-4 py-2 rounded-lg text-sm">
      Copied!
    </div>
  );
}