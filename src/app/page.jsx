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
    <div style={{ borderRadius: "10px", padding: "20px" }}>
      {/* About Me section with ID for scrolling */}
      <div id="about-me">
        <Profile />
        <PersonalWriteUp />
      </div>

      {/* Work Experience section */}
      <div id="work-experience">
        <CustomTimeline data={experienceData} />
      </div>

      {/* projects section */}
      <div
        id="projects"
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            content: "",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: "url(/backgroundimg2.png)",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            opacity: 0.15, // Adjust this value to control the transparency level
            zIndex: -1,
          }}
        />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between", // Updated this line
            margin: "5vh 10vw 5vh 10vw",
          }}
        >
          {Object.values(projectDetails).map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>

      {/* Education section */}
      <div id="education">
        <CustomTimeline data={educationData} />
      </div>
    </div>
  );
}
