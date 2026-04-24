"use client";

export default function ConfirmModal({
  open,
  title = "Are you sure?",
  description,
  onCancel,
  onConfirm,
}: {
  open: boolean;
  title?: string;
  description?: string;
  onCancel: () => void;
  onConfirm: () => void;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
      
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl w-full max-w-md p-5">
        
        {/* TITLE */}
        <h2 className="text-lg font-semibold">{title}</h2>

        {/* DESCRIPTION */}
        {description && (
          <p className="text-sm text-zinc-400 mt-2">
            {description}
          </p>
        )}

        {/* ACTIONS */}
        <div className="flex gap-2 mt-5 justify-end">

          <button
            onClick={onCancel}
            className="px-3 py-1 text-sm rounded-md bg-zinc-800 hover:bg-zinc-700"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="px-3 py-1 text-sm rounded-md bg-red-500 text-black font-semibold hover:bg-red-400"
          >
            Delete
          </button>

        </div>

      </div>
    </div>
  );
}