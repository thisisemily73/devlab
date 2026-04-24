import { useProjects } from "@/hooks/useProjects";
import { useToast } from "@/components/Toast";

const { projects, addTool } = useProjects();
const { showToast } = useToast();

<button
  onClick={() => {
    if (!projects.length) {
      showToast("Create a game first!");
      return;
    }

    const latest = projects[projects.length - 1]; // MVP shortcut
    addTool(latest.id, "NPC AI");

    showToast("Added to your game");
  }}
>
  ➕ Add to Game
</button>