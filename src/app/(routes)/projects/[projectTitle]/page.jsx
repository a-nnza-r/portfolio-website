"use client";
import { usePathname } from "next/navigation";

import ShowcasePage from "@/components/ShowcasePage";
import projectDetails from "@/lib/projectDetails";

export default function ProjectPage() {
  const pathname = usePathname();
  const parts = pathname.split("/");
  const lastSubstring = parts[parts.length - 1];
  const project = projectDetails[lastSubstring];

  return !project ? (
    <div>No Such Project</div>
  ) : (
    <ShowcasePage data={project} />
  );
}
