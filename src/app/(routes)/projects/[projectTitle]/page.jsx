"use client";
import { usePathname } from "next/navigation";

import ProjectShowcase from "@/components/ProjectShowcase";
import projectDetails from "@/lib/projectDetails";

export default function ProjectPage() {
  const pathname = usePathname();
  const parts = pathname.split("/");
  const lastSubstring = parts[parts.length - 1];
  const project = projectDetails[lastSubstring];
  return !project ? (
    <div>No Such Project</div>
  ) : (
    <ProjectShowcase
      title={project.title}
      projectDescription={project.projectDescription}
      projectTechnologies={project.projectTechnologies}
      projectContribution={project.projectContribution}
      projectAchievements={project.projectAchievements}
      projectElaboration={project.projectElaboration}
      projectLinks={project.projectLinks}
    />
  );
}
