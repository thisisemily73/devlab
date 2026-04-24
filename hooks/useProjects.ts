"use client";

import { useEffect, useState } from "react";
import { getProjects, createProject, addToolToProject, Project } from "@/lib/projects";

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    setProjects(getProjects());
  }, []);

  const create = (name: string, idea?: string) => {
    const newProject = createProject(name, idea);
    setProjects(getProjects());
    return newProject;
  };

  const addTool = (projectId: string, tool: string) => {
    addToolToProject(projectId, tool);
    setProjects(getProjects());
  };

  return { projects, create, addTool };
}