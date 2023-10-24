import CustomTimeline from "@/components/CustomTimeline.jsx";
import { Alert, Stack, Button } from "@mui/material";
import Link from "next/link";

import experienceData from "@/lib/experience.js";

export default function Page() {
  return (
    <div>
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Link style={{ textDecoration: "none" }} href={"projects"} passHref>
          <Alert severity="info">
            Current work experiences are non-techinical roles, click here to
            checkout the projects page for techinical experience
          </Alert>
        </Link>
      </Stack>

      <div
        style={{
          width: "100%",
          height: "75vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            content: "",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: "url(/eduback.jpeg)",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            opacity: 0.1, // Adjust this value to control the transparency level
            zIndex: -1,
          }}
        />
        <div style={{ alignSelf: "center" }}>
          <CustomTimeline data={experienceData} />
        </div>
      </div>
    </div>
  );
}
