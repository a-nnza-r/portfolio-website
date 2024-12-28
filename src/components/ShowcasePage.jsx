"use client";

import React, { useState } from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Box,
  Grid,
  IconButton,
  useTheme,
  Drawer,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import BulletList from "@/components/CustomOrderedList.jsx";
import ImageComponent from "@/components/ImageComponent.jsx";
import CustomTypography from "@/components/CustomTypography.jsx";
import LinksContainer from "@/components/LinksContainer.jsx";
import { TechIconContainer } from "@/components/ui/ProjectCard.jsx";

const components = {
  CustomTypography: CustomTypography,
  CustomList: BulletList,
  LinksContainer: LinksContainer,
  TechIconContainer: TechIconContainer,
};

export default function ShowcasePage(props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className="flex flex-col items-center m-5">
      <div
        className="flex flex-col items-center w-3/4 mb-4"
      >
        <ImageComponent
          src={props.data.TitleImg.src}
          alt={props.data.TitleImg.alt}
        />
        <Typography variant="h2" textAlign="center">
          {props.data.title}
        </Typography>
      </div>

      <Grid container spacing={3}>
        {<TableOfContents sections={props.data.sections} isMobile={isMobile} />}

        {/* Main Content */}
        <Grid item xs={12} sm={9}>
          {Object.entries(props.data.sections).map(([key, section], index) => (
            <Box key={index} id={key} mb={3}>
              {section.key !== "TitleImg" && (
                <Typography variant="h4" className="pb-2">{section.title}</Typography>
              )}
              {components[section.displayComponent] ? (
                React.createElement(components[section.displayComponent], {
                  dataList: section.data,
                })
              ) : (
                <Typography variant="body1">Component not found.</Typography>
              )}
            </Box>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}

function TableOfContents(props) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsDrawerOpen(open);
  };

  const drawerContents = (
    <List>
      {Object.entries(props.sections).map(([key, section], index) => (
        <ListItem key={index} button component="a" href={`#${key}`}>
          <ListItemText primary={section.title} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <>
      {props.isMobile ? (
        <>
          <IconButton
            onClick={toggleDrawer(true)}
            sx={{
              position: "fixed",
              bottom: (theme) => theme.spacing(1),
              right: (theme) => theme.spacing(0),
              zIndex: (theme) => theme.zIndex.drawer + 1,
            }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="right"
            open={isDrawerOpen}
            onClose={toggleDrawer(false)}
          >
            {drawerContents}
          </Drawer>
        </>
      ) : (
        <Grid item xs={3}>
          <Box style={{ position: "sticky", top: "10px" }}>
            <Typography variant="h5">Table of Contents</Typography>
            <List>
              {Object.entries(props.sections).map(([key, section], index) => (
                <ListItem key={index} button component="a" href={`#${key}`}>
                  <ListItemText primary={section.title} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Grid>
      )}
    </>
  );
}
