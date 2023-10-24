"use client";

import { useRouter } from "next/navigation";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import TechIconContainer from "@/components/TechIcon.jsx";

import techDetails from "@/lib/techDetails";

function getTechDetailsForProject(projectTechnologies) {
  const result = [];
  projectTechnologies.forEach((tech) => {
    if (techDetails[tech]) {
      result.push(techDetails[tech]);
    }
  });
  return result;
}

export default function ProjectCard(props) {
  const router = useRouter();
  const projectLink = `/projects/${props.name}`;

  const handleCardClick = () => {
    router.push(projectLink);
  };

  return (
    <Card sx={{ maxWidth: 345, border: "5px", margin: "10px" }}>
      <CardActionArea onClick={handleCardClick}>
        <CardMedia
          component="img"
          height="140"
          image={props.projectTitleImg}
          alt={props.projectTitleImgAlt}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            paddingBottom={"10px"}
          >
            {props.projectDescription}
          </Typography>
          <TechIconContainer
            dataList={getTechDetailsForProject(props.projectTechnologies)}
          />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export { getTechDetailsForProject, ProjectCard };
