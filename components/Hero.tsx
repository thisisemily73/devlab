"use client";

import { useState } from "react";
import { tools } from "@/lib/toolsData";
import { toolRegistry } from "@/lib/toolRegistry";

const featuredTools = tools.filter((tool) => tool.featured);

export default function Hero() {
    const [selectedTool, setSelectedTool] = useState<any | null>(null);

    const ToolComponent = selectedTool
        ? toolRegistry[selectedTool.id]
        : null;

    return (
        <section className="relative flex flex-col items-center justify-center min-h-[90vh] px-6 text-center">

            {/* TITLE */}
            <h1 className="relative text-6xl font-bold tracking-tight">
                <span className="absolute inset-0 text-white blur-xl opacity-20 animate-pulse">
                    DevLab
                </span>
                <span className="relative">DevLab</span>
            </h1>

            {/* SUBTITLE */}
            <p className="text-zinc-400 max-w-md mt-4">
                Roblox dev tools, scripts, and game idea generators — built for speed and simplicity.
            </p>

            {/* CTA */}
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
                {[
                    "Generate game ideas instantly",
                    "Copy-paste Roblox scripts",
                    "Build faster with dev tools",
                ].map((text, i) => (
                    <div
                        key={i}
                        className="
      group
      bg-zinc-900 border border-zinc-800
      p-4 rounded-xl text-sm text-zinc-300

      transition-all duration-300 ease-out
      hover:-translate-y-1.5 hover:shadow-xl hover:shadow-black/40
      hover:bg-zinc-800
    "
                    >
                        <p className="transition text-zinc-300 group-hover:text-white">
                            {text}
                        </p>
                    </div>
                ))}
            </div>

            {/* FEATURED SECTION */}
            <div className="mt-20 w-full max-w-5xl text-left">

                {/* HEADER */}
                <div className="flex items-center gap-4 mb-8">

                    <div className="flex-1 h-px bg-zinc-800" />

                    <span className="text-xs tracking-widest text-zinc-500 uppercase">
                        Featured Tools
                    </span>

                    <div className="flex-1 h-px bg-zinc-800" />

                </div>

                {/* GRID */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                    {featuredTools.map((tool) => (
                        <button
                            key={tool.id}
                            onClick={() => setSelectedTool(tool)}
                            className="
                group
                bg-zinc-900 border border-zinc-800 p-5 rounded-2xl
                text-left transition-all duration-200
                hover:bg-zinc-800 hover:shadow-xl hover:shadow-black/40
                hover:-translate-y-1
              "
                        >
                            <p className="font-semibold text-sm">
                                {tool.name}
                            </p>

                            <p className="text-xs text-zinc-400 mt-2">
                                {tool.desc}
                            </p>

                            <p className="text-xs text-zinc-500 mt-4 group-hover:text-zinc-300 transition">
                                Click to preview →
                            </p>
                        </button>
                    ))}

                </div>
            </div>

            {/* MODAL */}
            {selectedTool && (
                <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/70 backdrop-blur-sm">

                    {/* CLICK OUTSIDE TO CLOSE */}
                    <div
                        className="absolute inset-0"
                        onClick={() => setSelectedTool(null)}
                    />

                    {/* MODAL BOX */}
                    <div
                        className="
              relative w-full max-w-lg md:max-w-xl
              bg-zinc-900 border border-zinc-800
              rounded-2xl shadow-2xl shadow-black/60
              overflow-hidden
              animate-in fade-in zoom-in-95 duration-200
            "
                    >

                        {/* HEADER */}
                        <div className="flex justify-between items-start px-5 py-4 border-b border-zinc-800 bg-zinc-900/80 backdrop-blur">

                            <div>
                                <h2 className="font-semibold text-sm">
                                    {selectedTool.name}
                                </h2>
                                <p className="text-xs text-zinc-400 mt-1">
                                    {selectedTool.desc}
                                </p>
                            </div>

                            <button
                                onClick={() => setSelectedTool(null)}
                                className="text-zinc-400 hover:text-white transition"
                            >
                                ✕
                            </button>

                        </div>

                        {/* CONTENT */}
                        <div className="p-5">

                            {ToolComponent ? (
                                <ToolComponent />
                            ) : (
                                <div className="text-sm text-zinc-400 space-y-3">
                                    <p>This tool doesn’t have a preview yet.</p>

                                    <button
                                        onClick={() => {
                                            setSelectedTool(null);
                                            window.location.href = "/tools";
                                        }}
                                        className="text-white underline text-sm"
                                    >
                                        Open full tool →
                                    </button>
                                </div>
                            )}

                        </div>

                        {/* FOOTER */}
                        <div className="flex justify-between items-center px-5 py-3 border-t border-zinc-800">

                            <button
                                onClick={() => setSelectedTool(null)}
                                className="text-sm text-zinc-400 hover:text-white transition"
                            >
                                Close
                            </button>

                            <button
                                onClick={() => {
                                    setSelectedTool(null);
                                    window.location.href = "/tools";
                                }}
                                className="text-sm bg-white text-black px-4 py-2 rounded-lg font-medium hover:scale-105 transition"
                            >
                                Explore tools
                            </button>

                        </div>

                    </div>
                </div>
            )}

        </section>
    );
}