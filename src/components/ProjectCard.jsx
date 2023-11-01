"use client";

import { useRouter } from "next/navigation";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import TechIconContainer from "@/components/TechIcon.jsx";

export default function ProjectCard(props) {
  const project = props.project;
  const router = useRouter();
  const projectLink = `/projects/${project.name}`;

  const handleCardClick = () => {
    router.push(projectLink);
  };

  return (
    <Card
      sx={{
        minWidth: { xs: "80%", s: "50%", md: "35%", lg: "30%" },
        maxWidth: { xs: "100%", s: "80%", md: "45%", lg: "30%" },
        margin: "2vh 1vw",
      }}
    >
      <CardActionArea onClick={handleCardClick}>
        <CardMedia
          component="img"
          height="140vh"
          image={project.TitleImg.src}
          alt={project.TitleImg.alt}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {project.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            paddingBottom={"0.2vh"}
          >
            {project.sections.projectOverview.data.text}
          </Typography>
          {project.sections.projectTechnologies && (
            <TechIconContainer
              dataList={project.sections.projectTechnologies.data}
            />
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
