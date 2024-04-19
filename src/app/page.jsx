"use client";
import React from "react";
import { useRouter } from "next/navigation";

import Profile from "@/components/Profile";
import PersonalWriteUp from "@/components/PersonalWriteUp";
import ProjectCard from "@/components/ProjectCard.jsx";

import experienceData from "@/lib/experience.js";
import educationData from "@/lib/education.js";
import projectDetails from "@/lib/projectDetails";
import CustomTimeline from "@/components/CustomTimeline.jsx";

export default function Page() {
  const router = useRouter();

  return (
    <div>
      {/* About Me section with ID for scrolling */}
      <div id="about-me">
        <Profile />
        <PersonalWriteUp />
      </div>

      {/* Work Experience section */}
      <div
        id="work-experience"
        className="bg-light-bg text-deep-blue p-5 gap-0 m-5 items-center rounded-lg overflow-hidden shadow-lg"
      >
        <h2 className="text-xl md:text-2xl font-bold text-center mb-4">
          Work Experience
        </h2>
        <CustomTimeline data={experienceData} />
      </div>

      {/* Projects section */}
      <div
        id="projects"
        className="p-5 gap-0 m-5 flex flex-col items-center py-10 bg-gray-100 "
      >
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
          Projects
        </h2>
        <div className="flex flex-wrap justify-center gap-4 px-5 md:px-10">
          {Object.values(projectDetails).map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>

      {/* Education section */}
      <div
        id="education"
        className="bg-light-bg text-deep-blue p-5 gap-0 m-5 rounded-lg overflow-hidden shadow-lg"
      >
        <h2 className="text-xl md:text-2xl font-bold text-center mb-4">
          Education
        </h2>
        <CustomTimeline data={educationData} />
      </div>
    </div>
  );
}
