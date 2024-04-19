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
    <div className="sticky top-0 z-50 w-full flex justify-around bg-gray-800 text-white py-3 shadow-md">
      {pathname === "/" ? (
        <>
          <ScrollLink
            className="text-lg font-semibold hover:text-blue-400 cursor-pointer"
            activeClass="text-blue-500"
            to="about-me"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Ansar Ahmed
          </ScrollLink>
          <ScrollLink
            className="text-lg font-semibold hover:text-green-400 cursor-pointer"
            activeClass="text-green-500"
            to="work-experience"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Work Experience
          </ScrollLink>
          <ScrollLink
            className="text-lg font-semibold hover:text-red-400 cursor-pointer"
            activeClass="text-red-500"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Projects
          </ScrollLink>
          <ScrollLink
            className="text-lg font-semibold hover:text-yellow-400 cursor-pointer"
            activeClass="text-yellow-500"
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
          <a
            className="text-lg font-semibold hover:text-blue-400 cursor-pointer"
            onClick={() => handleNavigate("about-me")}
          >
            Ansar Ahmed
          </a>
          <a
            className="text-lg font-semibold hover:text-green-400 cursor-pointer"
            onClick={() => handleNavigate("work-experience")}
          >
            Work Experience
          </a>
          <a
            className="text-lg font-semibold hover:text-red-400 cursor-pointer"
            onClick={() => handleNavigate("projects")}
          >
            Projects
          </a>
          <a
            className="text-lg font-semibold hover:text-yellow-400 cursor-pointer"
            onClick={() => handleNavigate("education")}
          >
            Education
          </a>
        </>
      )}
    </div>
  );
}
