export type Project = {
  id: string;
  name: string;
  idea?: string;
  tools: string[];
};

const STORAGE_KEY = "devlab-projects";

// get all projects
export function getProjects(): Project[] {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

// save all projects
export function saveProjects(projects: Project[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
}

// create project
export function createProject(name: string, idea?: string): Project {
  const projects = getProjects();

  const newProject: Project = {
    id: crypto.randomUUID(),
    name,
    idea,
    tools: [],
  };

  const updated = [...projects, newProject];
  saveProjects(updated);

  return newProject;
}

// add tool to project
export function addToolToProject(projectId: string, tool: string) {
  const projects = getProjects();

  const updated = projects.map((p) =>
    p.id === projectId
      ? { ...p, tools: [...new Set([...p.tools, tool])] }
      : p
  );

  saveProjects(updated);
}