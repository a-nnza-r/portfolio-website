import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import Link from "next/link";

function SkillCard(props) {
  return (
    <Card
      style={{
        width: "80%",
        display: "flex",
        flexDirection: "row",
        borderRadius: "16px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        style={{
          borderTopLeftRadius: "16px",
          borderBottomLeftRadius: "16px",
          margin: "10px",
          flex: 2,
          display: "flex", // makes sure the child img takes the full width and height of this container
        }}
      >
        <CardMedia
          component="img"
          image={props.image}
          alt={props.skillName}
          style={{
            objectFit: "cover", // ensures the image scales correctly within its container
            width: "100%", // fills the width of the container
            height: "100%", // fills the height of the container
            borderRadius: "16px", // for rounded corners
          }}
        />
      </div>

      <CardContent style={{ padding: "12px", flex: 10 }}>
        <Typography variant="h5" component="div" gutterBottom>
          {props.skillName}
        </Typography>

        {props.certification && props.certification.length > 0 && (
          <div>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              {props.elaboration}
            </Typography>
            <div style={{ paddingLeft: 0, display: "flex" }}>
              {props.certification.map((project, index) => (
                <Link key={index} href={project.url} passHref>
                  <Button
                    variant="outlined"
                    color="primary"
                    style={{ margin: "4px 2px" }}
                  >
                    {project.name}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        )}

        {props.projects && props.projects.length > 0 && (
          <div>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Relevant Projects:{" "}
            </Typography>
            <div style={{ paddingLeft: 0, display: "flex" }}>
              {props.projects.map((project, index) => (
                <Link key={index} href={project.url} passHref>
                  <Button
                    variant="outlined"
                    color="primary"
                    style={{ margin: "4px 2px" }}
                  >
                    {project.name}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default SkillCard;
