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
  );
}
