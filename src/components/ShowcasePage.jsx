import React from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Box,
  Grid,
} from "@mui/material";

import BulletList from "@/components/CustomOrderedList.jsx";
import TechIconContainer from "@/components/TechIcon.jsx";
import ImageComponent from "@/components/ImageComponent.jsx";
import CustomTypography from "@/components/CustomTypography.jsx";
import LinksContainer from "@/components/LinksContainer.jsx";

const components = {
  TechIconContainer: TechIconContainer,
  CustomTypography: CustomTypography,
  CustomList: BulletList,
  LinksContainer: LinksContainer,
};

export default function ShowcasePage2(props) {
  return (
    <div style={{ margin: "10px" }}>
      <Container>
        <ImageComponent
          src={props.data.TitleImg.src}
          alt={props.data.TitleImg.alt}
        />
        <Typography variant="h2" align="center">
          {props.data.title}
        </Typography>
        <Grid container spacing={3}>
          {/* Table of Contents */}
          <Grid item xs={3}>
            <Box style={{ position: "sticky", top: "10px" }}>
              <Typography variant="h5">Table of Contents</Typography>
              <List>
                {Object.entries(props.data.sections).map(
                  ([key, section], index) => (
                    <ListItem key={index} button component="a" href={`#${key}`}>
                      <ListItemText primary={section.title} />
                    </ListItem>
                  )
                )}
              </List>
            </Box>
          </Grid>

          {/* Main Content */}
          <Grid item xs={9}>
            {Object.entries(props.data.sections).map(
              ([key, section], index) => (
                <Box mt={4} key={index} id={key}>
                  {section.key !== "TitleImg" && (
                    <Typography variant="h4">{section.title}</Typography>
                  )}
                  {components[section.displayComponent] ? (
                    React.createElement(components[section.displayComponent], {
                      dataList: section.data,
                    })
                  ) : (
                    <Typography variant="body1">
                      Component not found.
                    </Typography>
                  )}
                </Box>
              )
            )}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
