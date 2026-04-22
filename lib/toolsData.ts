import GameIdeaTool from "@/components/tools/GameIdeaTool";
import UsernameTool from "@/components/tools/UsernameTool";
import MonsterTool from "@/components/tools/MonsterTool";
import CurrencyTool from "@/components/tools/CurrencyTool";
import GameNameTool from "@/components/tools/GameNameTool";

export const tools = [
  {
    id: "game-idea",
    name: "Game Idea Generator",
    desc: "Generate Roblox game concepts instantly",
    type: "generator",
    component: GameIdeaTool,
    featured: true
  },
  {
    id: "username",
    name: "Username Generator",
    desc: "Create unique usernames",
    type: "generator",
    component: UsernameTool,
    featured: true
  },
  {
    id: "monster",
    name: "Monster Generator",
    desc: "Generate enemies for horror games",
    type: "generator",
    component: MonsterTool,
    featured: true
  },
  {
    id: "currency",
    name: "Currency Generator",
    desc: "Create in-game currency names",
    type: "generator",
    component: CurrencyTool,
    featured: false
  },
  {
    id: "game-name",
    name: "Game Name Generator",
    desc: "Generate Roblox game titles",
    type: "generator",
    component: GameNameTool,
    featured: false
  }
];