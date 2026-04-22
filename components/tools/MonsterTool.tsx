"use client";

import { useState } from "react";

export default function MonsterTool() {
  const [monster, setMonster] = useState<any | null>(null);

  const types = ["Shadow Beast", "Crawler", "Entity", "Mutant", "Wraith"];
  const traits = ["blind but fast", "attracted to sound", "invisible in darkness", "teleports randomly"];
  const behavior = ["stalks player slowly", "rushes when close", "hides until triggered", "patrols areas"];

  const generate = () => {
    setMonster({
      type: types[Math.floor(Math.random() * types.length)],
      trait: traits[Math.floor(Math.random() * traits.length)],
      behavior: behavior[Math.floor(Math.random() * behavior.length)],
    });
  };

  return (
    <div className="space-y-4">

      <button
        onClick={generate}
        className="bg-white text-black px-3 py-1 rounded-md text-sm"
      >
        Generate Monster
      </button>

      {monster && (
        <div className="bg-zinc-800 p-3 rounded-md text-sm space-y-1">
          <p><b>Type:</b> {monster.type}</p>
          <p><b>Trait:</b> {monster.trait}</p>
          <p><b>Behavior:</b> {monster.behavior}</p>
        </div>
      )}

    </div>
  );
}