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
    <Card sx={{ maxWidth: 345, border: "5px", margin: "10px" }}>
      <CardActionArea onClick={handleCardClick}>
        <CardMedia
          component="img"
          height="140"
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
            paddingBottom={"10px"}
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
