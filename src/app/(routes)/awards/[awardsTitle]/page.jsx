"use client";

import { usePathname } from "next/navigation";

import ShowcasePage from "@/components/ShowcasePage";
import awardDetails from "@/lib/awardsDetails";

export default function ProjectPage() {
  const pathname = usePathname();
  const parts = pathname.split("/");
  const lastSubstring = parts[parts.length - 1];
  const award = awardDetails[lastSubstring];

  return !award ? (
    <div>No Such Award</div>
  ) : (
    <ShowcasePage data={award} />
  );
}
