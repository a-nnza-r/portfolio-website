"use client";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Link from "next/link";

export default function Header() {
  return (
    <Tabs sx={{ bgcolor: "#f6f6f6" }}>
      <Tab
        value="/"
        label="Ansar Ahmed"
        component={Link}
        href="/"
        sx={{
          color: "#040424",
          fontWeight: "bold",
          fontSize: "25px",
          fontFamily: "Copperplate",
        }}
      />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Tab
          value="/education"
          label="EDUCATION"
          component={Link}
          href="/education"
        />
        <Tab
          value="/experience"
          label="EXPERIENCE"
          component={Link}
          href="/experience"
        />
        <Tab value="/skills" label="SKILLS" component={Link} href="/skills" />
        <Tab
          value="/projects"
          label="PROJECTS"
          component={Link}
          href="/projects"
        />
      </Box>
    </Tabs>
  );
}
