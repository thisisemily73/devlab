"use client";

import { useState } from "react";
import { useToast } from "@/components/Toast";

export default function UsernameTool() {
  const [name, setName] = useState("");
  const { showToast } = useToast();

  const prefixes: string[] = ["xX", "Pro", "Dark", "Neo", "Ultra", "Crazy", "The Real", "Captain", "Agent",
  "Lord", "Lady", "Sir", "Master", "Cyber", "Mega", "Hyper", "Super", "Alpha",
  "Omega", "Void", "Zero", "Ghostly", "Toxic", "Silent", "Hidden", "Ancient",
  "Future", "Lunar", "Solar", "Cosmic", "Primal", "Zen", "Major", "Colonel"];


  const roots: string[] = ["Pixel", "Ghost", "Shadow", "Nova", "Blade", "Storm", "Wolf", "Tiger", "Dragon",
  "Phoenix", "Falcon", "Eagle", "Viper", "Cobra", "Titan", "Colossus", "Rogue",
  "Hunter", "Slayer", "Warrior", "Knight", "Wizard", "Reaper", "Phantom", "Wraith",
  "Specter", "Demon", "Angel", "Droid", "Cyborg", "Glitch", "Byte", "Bit", "Core",
  "Aura", "Pulse", "Static", "Frost", "Blaze", "Thunder", "Vortex", "Abyss"];

  const suffixes: string[] = ["YT", "Plays", "HD", "X", "Official", "Dev", "Live", "TV", "Gaming", "Modz",
  "King", "Queen", "God", "SZN", "OnTop", "BTW", "Main", "Alt", "Vibes", "World",
  "Zone", "Central", "Hub", "Lab", "Studio", "Works", "Legacy", "Origin", "Prime"];

  const descriptors: string[] = [
  "Salty", "Cracked", "Goated", "Sweaty", "Chill", "Lost", "Found", "Broken",
  "Golden", "Silver", "Diamond", "Electric", "Nuclear", "Grim", "Lonely", "Wild",
  "Radiant", "Faded", "Eternal", "Infinite", "Stellar", "Abyssal", "Ethereal"];

  /**
 * Aesthetic "Decorators" to wrap around the name
 */
  const decorators: [string, string][] = [
    ["xX_", "_Xx"],
    ["[", "]"],
    ["iI_", "_Ii"],
    ["-", "-"],
    ["ツ", ""],
    ["v_", ""],
    ["", "_"],
    [".", "."],
    ["*", "*"]
  ];

/**
 * For that classic "Elite" gamer look
 */
  const leet_map: Record<string, string> = {
    "a": "4",
    "e": "3",
    "i": "1",
    "o": "0",
    "s": "5",
    "t": "7",
    "b": "8"
};

  const generate = (style: "clean" | "sweaty" | "aesthetic") => {
    const root = roots[Math.floor(Math.random() * roots.length)];
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    const deco = decorators[Math.floor(Math.random() * decorators.length)];
    const descriptor =
      descriptors[Math.floor(Math.random() * descriptors.length)];

      let result = "";

    switch (style) {
      case "sweaty":
        result = `${deco[0]}${descriptor}${root}_${suffix}${deco[1]}`;
        break;

      case "aesthetic":
        result = `${deco[0]}${descriptor.toLowerCase()}.${root.toLowerCase()}${deco[1]}`;
        break;

      case "clean":
      default:
        result = `${prefix}${root}`;
    }

    setName(result); // 🔥 THIS WAS MISSING
  };

  const copyName = () => {
    if (!name) return;

    navigator.clipboard.writeText(name);
    showToast("Copied username!");
  };

  return (
    <div className="space-y-4">

      <div className="flex gap-2">
  <button
    onClick={() => generate("clean")}
    className="bg-white text-black px-3 py-1 rounded-md text-sm"
  >
    Clean
  </button>

  <button
    onClick={() => generate("sweaty")}
    className="bg-zinc-700 text-white px-3 py-1 rounded-md text-sm"
  >
    Sweaty
  </button>

  <button
    onClick={() => generate("aesthetic")}
    className="bg-zinc-700 text-white px-3 py-1 rounded-md text-sm"
  >
    Aesthetic
  </button>
</div>

      {name && (
        <div className="bg-zinc-800 p-3 rounded-md text-sm flex justify-between items-center">

          <span>{name}</span>

          <button
            onClick={copyName}
            className="text-xs text-zinc-300 hover:text-white"
          >
            Copy
          </button>

        </div>
      )}

    </div>
  );
}