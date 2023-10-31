"use client";
import { usePathname } from "next/navigation";

import ShowcasePage from "@/components/ShowcasePage";
import courseDetails from "@/lib/courseDetails";

export default function EducationPage() {
  const pathname = usePathname();
  const parts = pathname.split("/");
  const lastSubstring = parts[parts.length - 1];
  const project = courseDetails[lastSubstring];
  return !project ? (
    <div>No Such Project</div>
  ) : (
    <ShowcasePage data={project} />
  );
}
