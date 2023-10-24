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

import Typography from "@mui/material/Typography";

export default function CustomTimeline(props) {
  return (
    <Timeline>
      {props.data.map((edu, index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent color="text.secondary">
            <Typography variant="h6" component="span">
              <strong>{edu.year}</strong>
            </Typography>
            <Typography> {edu.degree}</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            {index !== props.data.length - 1 && <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent>
            <Typography color="textSecondary">{edu.school}</Typography>
            <Typography>{edu.description}</Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
