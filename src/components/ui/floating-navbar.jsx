"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";

export const FloatingNav = ({ navItems, className, activeSection, setActiveSection }) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  // Set initial active section on mount or route change
  useEffect(() => {
    const path = typeof window !== "undefined" ? window.location.pathname : ""; // Ensure client-side execution
    if (path.includes("/projects")) {
      setActiveSection("#projects");
    } else if (path === "/" && !activeSection) {
      setActiveSection(navItems[0].link); // Default to the first nav item on home
    }
  }, [navItems, setActiveSection]);

  // Show/hide navigation bar based on scroll
  useMotionValueEvent(scrollYProgress, "change", (current) => {
    setVisible(current >= 0.05);
  });

  // Update active section on scroll (only on the home route "/")
  useEffect(() => {
    let lastScrollTop = 0;
    let scrollTimeout = null;
  
    const handleScroll = () => {
      // Clear existing timeout
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
  
      // Debounce the scroll handler
      scrollTimeout = setTimeout(() => {
        const currentScrollTop = window.scrollY;
        const scrollDirection = currentScrollTop > lastScrollTop ? "down" : "up";
        lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
  
        // Find all visible sections
        const visibleSections = navItems
          .map(item => {
            const section = document.querySelector(item.link);
            if (!section) return null;
  
            const rect = section.getBoundingClientRect();
            const quarterHeight = rect.height / 4;
            const visibleHeight = Math.min(rect.bottom, window.innerHeight) - 
                                Math.max(rect.top, 0);
            
            // Calculate how visible the section is
            const visibility = visibleHeight > 0 ? visibleHeight / rect.height : 0;
            
            // Check if section should be considered "active"
            const enteringDown = 
              scrollDirection === "down" && 
              rect.top <= window.innerHeight - quarterHeight && 
              rect.bottom > 0;
  
            const enteringUp = 
              scrollDirection === "up" && 
              rect.top <= quarterHeight && 
              rect.bottom > quarterHeight;
  
            return {
              link: item.link,
              visibility,
              enteringDown,
              enteringUp,
              top: rect.top,
              height: rect.height
            };
          })
          .filter(section => section !== null && 
                  (section.enteringDown || section.enteringUp || section.visibility > 0.25));
  
        if (visibleSections.length > 0) {
          // Sort sections by visibility and position
          const bestSection = visibleSections.sort((a, b) => {
            // If scroll direction is down, prefer the section that's more visible
            // and closer to the top of the viewport
            if (scrollDirection === "down") {
              if (Math.abs(a.visibility - b.visibility) > 0.1) {
                return b.visibility - a.visibility;
              }
              return a.top - b.top;
            } 
            // If scroll direction is up, prefer the section that's more visible
            // and closer to the bottom of the viewport
            else {
              if (Math.abs(a.visibility - b.visibility) > 0.1) {
                return b.visibility - a.visibility;
              }
              return b.top - a.top;
            }
          })[0];
  
          if (bestSection.link !== activeSection) {
            setActiveSection(bestSection.link);
          }
        }
      }, 50); // Small debounce delay
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [activeSection, navItems]);

  const handleNavigation = (e, link) => {
    e.preventDefault();
  
    const currentPath = window.location.pathname;
  
    if (currentPath === "/") {
      // If already on the home page, scroll to the target section
      const target = document.querySelector(link);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      // If not on the home page, redirect to `/` with the section hash
      window.location.href = `/${link}`;
    }
  
    // Set the active section to the clicked link
    setActiveSection(link);
  };
  

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-4 py-2 items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map((navItem, idx) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            scroll={false}
            onClick={(e) => handleNavigation(e, navItem.link)}
            className={cn(
              "relative dark:text-neutral-50 items-center flex text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 px-4 py-2",
              activeSection === navItem.link && "bg-blue-500 text-white rounded-full"
            )}
          >
            <span className={cn("hidden text-sm sm:block", activeSection === navItem.link && "text-white rounded-full")}>
              {navItem.name}
            </span>
            <div
              className={cn(
                "text-neutral-500 dark:text-white",
                activeSection === navItem.link && "bg-blue-500 text-white"
              )}
            >
              {navItem.icon}
            </div>
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
