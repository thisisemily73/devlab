"use client";

import { useState } from "react";
import { tools } from "@/lib/toolsData";
import ToolModal from "@/components/ToolModal";
import { toolRegistry } from "@/lib/toolRegistry";


import GameIdeaTool from "@/components/tools/GameIdeaTool";
import UsernameTool from "@/components/tools/UsernameTool";

export default function ToolsPage() {
    const [filters, setFilters] = useState<string[]>([]);
    const [query, setQuery] = useState("");
    const [selectedTool, setSelectedTool] = useState<any | null>(null);

    {/* RENDER TOOL*/ }
    const ActiveTool = selectedTool
        ? toolRegistry[selectedTool.id]
        : null;

    const toggleFilter = (type: string) => {
        if (type === "all") {
            setFilters([]);
            return;
        }

        setFilters((prev) =>
            prev.includes(type)
                ? prev.filter((t) => t !== type)
                : [...prev, type]
        );
    };

    const clearFilters = () => {
        setFilters([]);
    };

    const featuredTools = tools.filter((tool) => tool.featured);

    const filteredTools = tools.filter((tool) => {
        const matchesFilter =
            filters.length === 0 || filters.includes(tool.type);

        const matchesSearch = tool.name
            .toLowerCase()
            .includes(query.toLowerCase());

        return matchesFilter && matchesSearch;
    });

    return (
        <main className="flex flex-col items-center px-6 py-10">

            {/* TITLE */}
            <h1 className="text-3xl font-bold mb-6">Tools</h1>

            <div className="w-full max-w-2xl">

                {/* FILTERS */}
                <div className="flex gap-2 flex-wrap mb-2">

                    {/* ALL */}
                    <button
                        onClick={() => toggleFilter("all")}
                        className={`px-3 py-1 rounded-md text-sm border transition ${filters.length === 0
                            ? "bg-white text-black"
                            : "bg-zinc-900 border-zinc-800 text-zinc-300"
                            }`}
                    >
                        All
                    </button>

                    {/* CATEGORY FILTERS */}
                    {["generator", "utility"].map((type) => (
                        <button
                            key={type}
                            onClick={() => toggleFilter(type)}
                            className={`px-3 py-1 rounded-md text-sm border transition ${filters.includes(type)
                                ? "bg-white text-black"
                                : "bg-zinc-900 border-zinc-800 text-zinc-300"
                                }`}
                        >
                            {type}
                        </button>
                    ))}

                    {/* CLEAR */}
                    <button
                        onClick={clearFilters}
                        className="px-3 py-1 text-sm text-zinc-400 hover:text-white ml-auto"
                    >
                        Clear
                    </button>

                </div>


                {/* SEARCH */}
                <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search tools..."
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2 text-sm mb-4"
                />

            </div>

            {/* FEATURED TOOLS */}
            {filters.length === 0 && query === "" && (
                <div className="w-full max-w-2xl mb-6">

                    <h2 className="text-sm text-zinc-400 mb-2">
                        Featured Tools
                    </h2>

                    <div className="grid gap-3">

                        {featuredTools.map((tool) => (
                            <div
                                key={tool.id}
                                onClick={() => setSelectedTool(tool)}
                                className="bg-zinc-900 border border-zinc-800 p-3 rounded-xl cursor-pointer hover:bg-zinc-800 transition"
                            >
                                <p className="font-semibold">{tool.name}</p>
                                <p className="text-xs text-zinc-400">{tool.desc}</p>
                            </div>
                        ))}

                    </div>

                </div>
            )}


            {/* DIVIDER */}
            <div className="w-full max-w-2xl my-6 flex items-center gap-3">

                <div className="h-px flex-1 bg-zinc-800" />

                <span className="text-xs text-zinc-500 tracking-wider">
                    ALL TOOLS
                </span>

                <div className="h-px flex-1 bg-zinc-800" />

            </div>

            {/* IF NO RESULTS */}
            {filteredTools.length === 0 && (
                <div className="w-full max-w-2xl text-center py-10">
                    <p className="text-zinc-400">No tools found.</p>
                </div>
            )}


            {/* TOOL LIST */}
            <div className="w-full max-w-2xl space-y-4">

                {filteredTools.map((tool, i) => (
                    <div
                        key={i}
                        className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl"
                    >

                        <h2 className="font-semibold">{tool.name}</h2>
                        <p className="text-gray-400 text-sm mt-1">
                            {tool.desc}
                        </p>

                        <button
                            onClick={() => setSelectedTool(tool)}
                            className="mt-3 bg-white text-black px-3 py-1 rounded-md text-sm"
                        >
                            Open
                        </button>

                    </div>
                ))}

            </div>

            {/* TOOL MODAL */}
            <ToolModal
                open={!!selectedTool}
                title={selectedTool?.name || ""}
                onClose={() => setSelectedTool(null)}
            >
                {ActiveTool ? <ActiveTool /> : null}
            </ToolModal>

        </main>
    );
}