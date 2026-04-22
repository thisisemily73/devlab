import GameIdeaTool from "@/components/tools/GameIdeaTool";
import UsernameTool from "@/components/tools/UsernameTool";
import MonsterTool from "@/components/tools/MonsterTool";
import CurrencyTool from "@/components/tools/CurrencyTool";
import GameNameTool from "@/components/tools/GameNameTool";



export const toolRegistry: Record<string, React.FC> = {
    "game-idea": GameIdeaTool,
    "username": UsernameTool,
    "monster": MonsterTool,
    "currency": CurrencyTool,
    "game-name": GameNameTool
};