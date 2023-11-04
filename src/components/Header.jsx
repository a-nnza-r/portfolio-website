"use client";

import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Link from "next/link";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  function DrawerContent(props) {
    return (
      <Box sx={{ display: "flex", flexDirection: props.flexDirection }}>
        <Tab
          value="/education"
          label="EDUCATION"
          component={Link}
          href="/education"
        />
        {/* <Tab
          value="/experience"
          label="EXPERIENCE"
          component={Link}
          href="/experience"
        /> */}
        <Tab value="/skills" label="SKILLS" component={Link} href="/skills" />
        <Tab
          value="/projects"
          label="PROJECTS"
          component={Link}
          href="/projects"
        />
      </Box>
    );
  }

  return (
    <Tabs
      sx={{
        bgcolor: "#f6f6f6",
        width: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Tab
        value="/"
        label="Ansar Ahmed"
        component={Link}
        href="/"
        sx={{
          flexGrow: 0,
          flexShrink: 1,
          color: "#040424",
          fontWeight: "bold",
          fontSize: "25px",
          fontFamily: "Copperplate",
        }}
      />

      {/* For larger screens */}
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "none", sm: "none", md: "flex" },
          justifyContent: "flex-end",
        }}
      >
        <DrawerContent flexDirection={"row"} />
      </Box>

      {/* For smaller screens */}
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "flex", sm: "flex", md: "none" },
          justifyContent: "flex-end",
          margin: "5px",
        }}
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>
      </Box>

      {/* Drawer for mobile view */}
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        <DrawerContent flexDirection={"column"} />
      </Drawer>
    </Tabs>
  );
}
