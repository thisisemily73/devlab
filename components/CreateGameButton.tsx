import { useProjects } from "@/hooks/useProjects";
import { useToast } from "@/components/Toast";

const { create } = useProjects();
const { showToast } = useToast();

<button
  onClick={() => {
    const project = create("My Game"); // later replace with input
    showToast("Game created!");
  }}
>
  ➕ Create Game
</button>