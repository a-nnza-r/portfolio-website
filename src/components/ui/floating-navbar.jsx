"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";

export const FloatingNav = ({ navItems, className }) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    }
  });

  // Detect visible section
  useEffect(() => {
    const handleScroll = () => {
      navItems.forEach((item) => {
        const section = document.querySelector(item.link);
        if (section) {
          const rect = section.getBoundingClientRect();
          const isInView = rect.top >= 0 && rect.top < window.innerHeight / 2;

          if (isInView) {
            setActiveSection(item.link);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navItems]);

  const handleSmoothScroll = (e, link) => {
    e.preventDefault();
    const target = document.querySelector(link);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-4 py-2 items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map((navItem, idx) => (
          <a
            key={`link=${idx}`}
            href={navItem.link}
            onClick={(e) => handleSmoothScroll(e, navItem.link)}
            className={cn(
              "relative dark:text-neutral-50 items-center flex text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 px-4 py-2",
              activeSection === navItem.link && "bg-blue-500 text-white rounded-full "
            )}
          >
            <span className={cn("hidden text-sm sm:block", activeSection === navItem.link && "text-white rounded-full" )}>{navItem.name}</span>
            <div className={cn(
              "text-neutral-500 dark:text-white",
              activeSection === navItem.link && "bg-blue-500 text-white"
            )}>{navItem.icon}</div>
          </a>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
