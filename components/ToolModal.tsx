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
    return (
        <div
            className={`
                fixed inset-0 z-50 flex items-center justify-center px-4
                bg-black/60 backdrop-blur-sm
                transition-opacity duration-200
                ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
            `}
            onClick={onClose}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className={`
                    relative w-full max-w-md
                    bg-zinc-900 border border-zinc-800
                    rounded-2xl shadow-2xl shadow-black/60
                    overflow-hidden
                    transition-all duration-200 ease-out
                    ${open ? "scale-100 opacity-100" : "scale-95 opacity-0"}
                `}
            >

                {/* HEADER */}
                <div className="flex justify-between items-center px-5 py-4 border-b border-zinc-800 bg-zinc-900/80 backdrop-blur">
                    <h2 className="font-semibold text-sm">
                        {title}
                    </h2>

                    <button
                        onClick={onClose}
                        className="text-zinc-400 hover:text-white transition"
                    >
                        ✕
                    </button>
                </div>

                {/* CONTENT */}
                <div className="p-5">
                    {children}
                </div>

            </div>
        </div>
    );
}