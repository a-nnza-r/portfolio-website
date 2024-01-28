"use client";

import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import React, { useEffect, useState } from "react";

import { Box, IconButton } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function CustomTimeline(props) {
  const [isSmallerThanMedium, setIsSmallerThanMedium] = useState(
    typeof window !== "undefined" && window.innerWidth < 1024 // Initial check
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
    <>
      {isSmallerThanMedium ? (
        <Timeline align="left">
          {props.data.map((details, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot />
                {index !== props.data.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineOppositeContent
                style={{
                  maxWidth: "1px",
                  paddingLeft: "0px",
                  paddingRight: "0px",
                }}
              />
              <TimelineContent>
                <Typography
                  variant="h6"
                  component="span"
                  color="text.secondary"
                >
                  <strong>{details.year}</strong>
                </Typography>
                {details.degree && (
                  <Typography variant="body1"> {details.degree}</Typography>
                )}
                {(details.company, details.position) && (
                  <Typography variant="body1">
                    {details.position} - {details.company}
                  </Typography>
                )}
                {details.school && (
                  <Typography variant="body1" paddingBottom={"3px"}>
                    {details.school}
                  </Typography>
                )}

                {details.description && (
                  <Typography
                    variant="body2"
                    paddingBottom={"2px"}
                    color="textSecondary"
                  >
                    {details.description}
                  </Typography>
                )}
                {details.link && (
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      display="flex"
                      alignSelf="center"
                      flexWrap="wrap"
                    >
                      Company Links:
                    </Typography>
                    <Box display="flex" width="70%">
                      {details.link.map((social) => (
                        <IconButton
                          key={social.name}
                          href={social.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={social.icon}
                            alt={social.name}
                            width={24}
                            height={24}
                          />
                        </IconButton>
                      ))}
                    </Box>
                  </div>
                )}
                {details.details && (
                  <ul>
                    {details.details.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <Typography variant="caption" color="textSecondary">
                          {item}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                )}
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      ) : (
        <Timeline>
          {props.data.map((details, index) => (
            <TimelineItem key={index}>
              <TimelineOppositeContent color="text.secondary">
                <Typography variant="h6" component="span">
                  <strong>{details.year}</strong>
                </Typography>
                {details.degree && (
                  <Typography variant="body1"> {details.degree}</Typography>
                )}
                {details.position && (
                  <Typography variant="body1"> {details.position}</Typography>
                )}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                {index !== props.data.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                {details.school && (
                  <Typography variant="body1" paddingBottom={"3px"}>
                    {details.school}
                  </Typography>
                )}
                {details.company && (
                  <Typography variant="body1">{details.company}</Typography>
                )}
                {details.description && (
                  <Typography
                    variant="body2"
                    paddingBottom={"2px"}
                    color="textSecondary"
                  >
                    {details.description}
                  </Typography>
                )}
                {details.link && (
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      display="flex"
                      alignSelf="center"
                      flexWrap="wrap"
                    >
                      Company Links:
                    </Typography>
                    <Box display="flex" width="70%">
                      {details.link.map((social) => (
                        <IconButton
                          key={social.name}
                          href={social.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={social.icon}
                            alt={social.name}
                            width={24}
                            height={24}
                          />
                        </IconButton>
                      ))}
                    </Box>
                  </div>
                )}
                {details.details && (
                  <ul>
                    {details.details.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <Typography variant="caption" color="textSecondary">
                          {item}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                )}
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      )}
    </>
  );
}
