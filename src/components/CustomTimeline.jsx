"use client";

import React, { useEffect, useState } from "react";
import { Timeline } from "@/components/ui/timeline"; // Adjust import path as necessary
import Image from "next/image";

export default function CustomTimeline(props) {
  var data = []
  props.data.map((details, index) => {
    data.push({
        title: details.year,
        content: (
              <div className="timeline-content">
                {details.position && details.company && (
                  <p className="text-xl font-semibold md:text-2xl text-neutral-800 dark:text-neutral-200">
                    {details.position} @ <span className="font-normal">{details.company}</span>
                  </p>
                )}
                {details.degree && details.school && (
                  <p className="text-xl font-semibold md:text-2xl text-neutral-800 dark:text-neutral-200">
                    {details.degree } @ <span className="font-normal">{details.school}</span>
                  </p>
                )}
                {details.description && (
                  <p className="py-3 font-light text-neutral-800 dark:text-neutral-200">
                    {details.description}
                  </p>
                )}
                {details.link && (
                  <div className="flex flex-wrap items-center mt-2">
                    <span className="py-3 mr-2 text-neutral-800 dark:text-neutral-400">
                      Links:
                    </span>
                    {details.link.map((social, idx) => (
                      <a
                        key={idx}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mr-2 hover:opacity-70"
                      >
                        <Image
                          src={social.icon}
                          alt={social.name}
                          width={24}
                          height={24}
                          className="rounded"
                        />
                      </a>
                    ))}
                  </div>
                )}
                {details.details && (
                  <ul className="ml-5 font-light list-disc text-neutral-800 dark:text-neutral-400">
                    {details.details.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
        )
    })
    })
  const [isSmallerThanMedium, setIsSmallerThanMedium] = useState(
    typeof window !== "undefined" && window.innerWidth < 1024
  );

  useEffect(() => {
    function updateScreenSize() {
      setIsSmallerThanMedium(
        typeof window !== "undefined" && window.innerWidth < 1024
      );
    }

    if (typeof window !== "undefined") {
      window.addEventListener("resize", updateScreenSize);
      return () => {
        window.removeEventListener("resize", updateScreenSize);
      };
    }
  }, []);

  return (
    <Timeline data={data} timelineTitle={props.timelineTitle}/>
  );
}
