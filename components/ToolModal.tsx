"use client";

export default function ToolModal({
  open,
  onClose,
  children,
  title,
}: {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title: string;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-6">
      
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl w-full max-w-lg p-5">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold">{title}</h2>

          <button
            onClick={onClose}
            className="text-zinc-400 hover:text-white"
          >
            ✕
          </button>
        </div>

        {/* CONTENT */}
        <div>{children}</div>

      </div>
    </div>
  );
}