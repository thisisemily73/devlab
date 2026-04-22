"use client";

import { useState } from "react";
import { tools } from "@/lib/toolsData";
import { toolRegistry } from "@/lib/toolRegistry";
const featuredTools = tools.filter(tool => tool.featured);

export default function Hero() {
    const featured = tools.filter((t) => t.featured);
    const [selectedTool, setSelectedTool] = useState<any | null>(null);

    const ToolComponent = selectedTool
        ? toolRegistry[selectedTool.id]
        : null;

    return (
        <section className="relative flex flex-col items-center justify-center min-h-[80vh] px-6 text-center">

            {/* BACKGROUND */}
            <div className="absolute inset-0 -z-10 opacity-30 bg-gradient-to-b from-zinc-900 to-black" />

            {/* TITLE */}
            <h1 className="text-6xl font-bold tracking-tight">
                DevLab
            </h1>

            {/* SUBTITLE */}
            <p className="text-zinc-400 max-w-md mt-4">
                Roblox dev tools, scripts, and game idea generators — built for speed and simplicity.
            </p>

            {/* CTA BUTTONS */}
            <div className="mt-10 flex gap-4">

                <a
                    href="/tools"
                    className="bg-white text-black px-6 py-3 rounded-xl font-medium hover:scale-105 transition"
                >
                    Tools
                </a>

                <a
                    href="/scripts"
                    className="bg-zinc-900 border border-zinc-800 px-6 py-3 rounded-xl hover:bg-zinc-800 transition"
                >
                    Scripts
                </a>

            </div>

            {/* FEATURE HINTS */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-3xl">

                <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl text-sm text-zinc-300">
                    Generate game ideas instantly
                </div>

                <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl text-sm text-zinc-300">
                    Copy-paste Roblox scripts
                </div>

                <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl text-sm text-zinc-300">
                    Learn faster with dev tools
                </div>

            </div>

            {/* DIVIDER */}
            <div className="mt-16 w-full max-w-3xl flex items-center gap-3">

                <div className="h-px flex-1 bg-zinc-800" />

                <span className="text-xs text-zinc-500 tracking-widest">
                    FEATURED TOOLS
                </span>

                <div className="h-px flex-1 bg-zinc-800" />

            </div>

            {/* FEATURED TOOLS */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-3xl">

                {featured.map((tool) => (
                    <button
                        key={tool.id}
                        onClick={() => setSelectedTool(tool)}
                        className="
      bg-zinc-900 border border-zinc-800 p-4 rounded-xl
      text-left transition-all duration-200
      hover:bg-zinc-800 hover:shadow-lg hover:shadow-black/40
      hover:-translate-y-1 cursor-pointer
    "
                    >

                        <p className="font-semibold text-sm">
                            {tool.name}
                        </p>

                        <p className="text-xs text-zinc-400 mt-2">
                            {tool.desc}
                        </p>

                        <p className="text-xs text-zinc-500 mt-3">
                            Click to preview →
                        </p>

                    </button>
                ))}

            </div>

            {selectedTool && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">

                    {/* MODAL BOX */}
                    <div className="bg-zinc-900 border border-zinc-800 rounded-xl w-full max-w-md p-5">

                        {/* HEADER */}
                        <div className="flex justify-between items-center mb-4">

                            <h2 className="font-semibold">
                                {selectedTool.name}
                            </h2>

                            <button
                                onClick={() => setSelectedTool(null)}
                                className="text-zinc-500 hover:text-white"
                            >
                                ✕
                            </button>

                        </div>

                        {/* DESCRIPTION */}
                        <p className="text-sm text-zinc-400 mb-4">
                            {selectedTool.desc}
                        </p>

                        {/* PLACEHOLDER CONTENT */}
                        <div className="bg-zinc-800 rounded-lg p-3">
                            {ToolComponent ? (
                                <ToolComponent />
                            ) : (
                                <div className="text-xs text-zinc-300 space-y-2">
                                    <p>Preview coming soon...</p>

                                    <button
                                        onClick={() => {
                                            setSelectedTool(null);
                                            window.location.href = "/tools";
                                        }}
                                        className="text-white underline text-xs"
                                    >
                                        Explore other tools →
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* ACTION BUTTON */}
                        <button
                            onClick={() => {
                                setSelectedTool(null);
                                window.location.href = "/tools";
                            }}
                            className="mt-4 w-full bg-white text-black py-2 rounded-lg text-sm font-medium"
                        >
                            Explore other tools
                        </button>

                    </div>

                </div>
            )}

        </section>
    );
}