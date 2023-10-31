import React from "react";
import { Typography } from "@mui/material";

export default function CustomTypography(props) {
  return (
    <Typography variant="body1" {...props}>
      {props.dataList.text}
    </Typography>
  );
}
