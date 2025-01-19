"use client";
import React from "react";
import { useRouter } from "next/navigation";

import { ProjectCard } from "@/components/ui/ProjectCard.jsx";
import { AwardCard } from "@/components/ui/AwardsCard.jsx";

import experienceData from "@/lib/experience.js";
import educationData from "@/lib/education.js";
import projectDetails from "@/lib/projectDetails";
import CustomTimeline from "@/components/CustomTimeline.jsx";
import Profile from "@/components/Profile";
import awardDetails from "@/lib/awardsDetails";

export default function Page() {
  const router = useRouter();

  return (
    <div className="max-w-5xl mx-auto">
      {/* About Me section with ID for scrolling */}
      <div id="about-me">
        <Profile/>
      </div>

      {/* Work Experience section */}
        {experienceData && experienceData.length > 0 && (
          <div id="work-experience" className="px-4 mb-6 sm:px-0">
            <CustomTimeline data={experienceData} timelineTitle={"Work Experience"} />
          </div>
        )}

      {/* Awards section */}
      <div id="awards" className="px-10">
        <h2 className="p-8 text-3xl text-center text-black md:px-8 md:text-4xl dark:text-white">
          Awards
        </h2>
        <div className="grid flex-wrap items-center justify-center gap-4 md:grid-cols-2">
          {Object.values(awardDetails).map((award, index) => (
            <AwardCard key={index} award={award} />
          ))}
        </div>
      </div>

      {/* Projects section */}
      <div id="projects" className="px-10">
        <h2 className="p-8 text-3xl text-center text-black md:px-8 md:text-4xl dark:text-white">
          Projects
        </h2>
        <div className="grid flex-wrap items-center justify-center gap-4 md:grid-cols-2">
          {Object.values(projectDetails).map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>

      {/* Education section */}
      <div id="education">
        <CustomTimeline data={educationData} timelineTitle={"Education"} />
      </div>
    </div>
  );
}
