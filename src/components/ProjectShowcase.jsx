import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Box,
  Grid,
} from "@mui/material";

import TechIconContainer from "@/components/TechIcon.jsx";
import { getTechDetailsForProject } from "@/components/ProjectCard.jsx";

export default function ProjectPage(props) {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Typography variant="h4">Table of Contents</Typography>
          <List>
            {props.projectElaboration && (
              <ListItem button component="a" href="#projectElaboration">
                <ListItemText primary="Project Description" />
              </ListItem>
            )}
            {props.projectTechnologies &&
              props.projectTechnologies.length > 0 && (
                <ListItem button component="a" href="#technologies">
                  <ListItemText primary="Technologies Used" />
                </ListItem>
              )}
            {props.projectContribution &&
              props.projectContribution.length > 0 && (
                <ListItem button component="a" href="#contribution">
                  <ListItemText primary="Contributions" />
                </ListItem>
              )}
            {props.projectAchievements &&
              props.projectAchievements.length > 0 && (
                <ListItem button component="a" href="#achievements">
                  <ListItemText primary="Achievements" />
                </ListItem>
              )}
            {props.projectLinks && props.projectLinks.length > 0 && (
              <ListItem button component="a" href="#links">
                <ListItemText primary="Links" />
              </ListItem>
            )}
          </List>
        </Grid>

        {/* Main Content */}
        <Grid item xs={9}>
          <Box mt={4}>
            <Typography variant="h2" id="projectElaboration">
              {props.title}
            </Typography>
            {props.projectElaboration && (
              <Box mt={4}>
                <Typography variant="h5">Project Description</Typography>
                <Typography variant="body1">
                  {props.projectElaboration}
                </Typography>
              </Box>
            )}
          </Box>
          {props.projectTechnologies &&
            props.projectTechnologies.length > 0 && (
              <Box mt={6} id="technologies">
                <Typography variant="h5">Technologies Used</Typography>
                <TechIconContainer
                  dataList={getTechDetailsForProject(props.projectTechnologies)}
                />
              </Box>
            )}
          {props.projectContribution &&
            props.projectContribution.length > 0 && (
              <Box mt={6} id="contribution">
                <Typography variant="h5">Contributions</Typography>
                <List>
                  {props.projectContribution.map((contribution, index) => (
                    <ListItem key={index}>
                      <ListItemText primary={contribution} />
                    </ListItem>
                  ))}
                </List>
              </Box>
            )}
          {props.projectAchievements &&
            props.projectAchievements.length > 0 && (
              <Box mt={6} id="achievements">
                <Typography variant="h5">Achievements</Typography>
                <List>
                  {props.projectAchievements.map((achievement, index) => (
                    <ListItem key={index}>
                      <ListItemText primary={achievement} />
                    </ListItem>
                  ))}
                </List>
              </Box>
            )}
          {props.projectLinks && props.projectLinks.length > 0 && (
            <Box mt={6} id="links">
              <Typography variant="h5">Links</Typography>
              <List>
                {props.projectLinks.map((link, index) => (
                  <ListItem key={index} component="a" href={link.url}>
                    <ListItemText primary={link.label} />
                  </ListItem>
                ))}
              </List>
            </Box>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}
