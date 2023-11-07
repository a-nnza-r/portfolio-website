import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Container,
  Box,
} from "@mui/material";
import Link from "next/link";

function SkillCard(props) {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "row",
        borderRadius: "16px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Box
        sx={{
          borderTopLeftRadius: "16px",
          borderBottomLeftRadius: "16px",
          m: 1,
          flex: {
            xs: 5,
            sm: 2,
          }, // Adjusts flex behavior for smaller screens
          display: "flex",
        }}
      >
        <CardMedia
          component="img"
          image={props.image}
          alt={props.skillName}
          sx={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            borderRadius: "16px",
          }}
        />
      </Box>

      <CardContent sx={{ flex: 10 }}>
        <Typography
          variant="h5"
          component="div"
          gutterBottom
          sx={{
            fontSize: {
              xs: "1rem",
              sm: "1.25rem",
              md: "1.5rem",
              lg: "1.75rem",
            },
          }}
        >
          {props.skillName}
        </Typography>

        {props.certification && props.certification.length > 0 && (
          <Container>
            <Typography
              variant="body2"
              color="text.secondary"
              gutterBottom
              sx={{
                fontSize: {
                  xs: "0.8rem",
                  sm: "0.9rem",
                  md: "1rem",
                  lg: "1.1rem",
                },
              }}
            >
              {props.elaboration}
            </Typography>
            {props.certification.map((project, index) => (
              <Link key={index} href={project.url} passHref>
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{
                    margin: "4px 2px",
                    fontSize: {
                      xs: "0.5rem",
                      sm: "0.7rem",
                      md: "1rem",
                      lg: "1rem",
                    },
                  }}
                >
                  {project.name}
                </Button>
              </Link>
            ))}
          </Container>
        )}

        {props.projects && props.projects.length > 0 && (
          <Container>
            <Typography
              variant="body2"
              color="text.secondary"
              gutterBottom
              sx={{
                fontSize: {
                  xs: "0.8rem",
                  sm: "0.9rem",
                  md: "1rem",
                  lg: "1.1rem",
                },
              }}
            >
              Relevant Projects:
            </Typography>
            {props.projects.map((project, index) => (
              <Link key={index} href={project.url} passHref>
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{
                    margin: "4px 2px",
                    fontSize: {
                      xs: "0.5rem",
                      sm: "0.7rem",
                      md: "1rem",
                      lg: "1rem",
                    },
                  }}
                >
                  {project.name}
                </Button>
              </Link>
            ))}
          </Container>
        )}
      </CardContent>
    </Card>
  );
}

export default SkillCard;
