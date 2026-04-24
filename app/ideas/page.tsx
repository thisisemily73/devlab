import { useProjects } from "@/hooks/useProjects";
import { useToast } from "@/components/Toast";

const { create } = useProjects();
const { showToast } = useToast();