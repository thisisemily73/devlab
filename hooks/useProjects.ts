"use client";

import { useEffect, useState } from "react";
import {
  getProjects,
  createProject,
  addToolToProject,
  saveProjects,
  Project
} from "@/lib/projects";

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

  // ✅ FIXED DELETE
  const deleteProject = (id: string) => {
    const current = getProjects();

    const updated = current.filter((p) => p.id !== id);

    // IMPORTANT: use your helper so key stays consistent
    saveProjects(updated);

    setProjects(updated);
  };

  return {
    projects,
    create,
    addTool,
    deleteProject,
  };
}