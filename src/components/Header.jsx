"use client";
import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { IconUser, IconBriefcase, IconFolder, IconSchool } from "@tabler/icons-react";

export default function Header({activeSection, setActiveSection}) {
  const navItems = [
    {
      name: "About Me",
      link: "#about-me",
      icon: <IconUser className="w-5 h-5 sm:hidden" />,
    },
    {
      name: "Work Experience",
      link: "#work-experience",
      icon: <IconBriefcase className="w-5 h-5 sm:hidden" />,
    },
    {
      name: "Projects",
      link: "#projects",
      icon: <IconFolder className="w-5 h-5 sm:hidden" />,
    },
    {
      name: "Education",
      link: "#education",
      icon: <IconSchool className="w-5 h-5 sm:hidden" />,
    },
  ];

  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} activeSection={activeSection} setActiveSection={setActiveSection} />
    </div>
  );
}
