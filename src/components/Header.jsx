"use client";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Link as ScrollLink, scroller } from "react-scroll";

export default function Header() {
  const [activeSection, setActiveSection] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (activeSection && pathname === "/") {
      setTimeout(() => {
        scroller.scrollTo(activeSection, {
          duration: 500,
          delay: 0,
          smooth: "easeInOutQuart",
          offset: -70,
        });
        setActiveSection("");
      }, 100);
    }
  }, [pathname, activeSection]);

  const handleNavigate = (section) => {
    if (pathname !== "/") {
      setActiveSection(section);
      router.push("/");
    } else {
      scroller.scrollTo(section, {
        duration: 500,
        delay: 0,
        smooth: "easeInOutQuart",
        offset: -70,
      });
    }
  };

  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        display: "flex",
        justifyContent: "space-around",
        padding: "10px",
        background: "gray",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      {/* Conditionally render ScrollLink or a regular anchor tag based on current path */}
      {pathname === "/" ? (
        <>
          <ScrollLink
            activeClass="active"
            to="about-me"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Ansar Ahmed
          </ScrollLink>
          <ScrollLink
            activeClass="active"
            to="work-experience"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Work Experience
          </ScrollLink>
          <ScrollLink
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Projects
          </ScrollLink>
          <ScrollLink
            activeClass="active"
            to="education"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Education
          </ScrollLink>
        </>
      ) : (
        <>
          <a onClick={() => handleNavigate("about-me")}>Ansar Ahmed</a>
          <a onClick={() => handleNavigate("work-experience")}>
            Work Experience
          </a>
          <a onClick={() => handleNavigate("projects")}>Projects</a>
          <a onClick={() => handleNavigate("education")}>Education</a>
        </>
      )}
    </div>
  );
}
