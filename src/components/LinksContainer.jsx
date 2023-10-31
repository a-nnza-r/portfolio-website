import {
  Card,
  CardMedia,
  CardContent,
  Button,
  Typography,
  Box,
  Grid,
} from "@mui/material";

export default function LinksContainer(props) {
  const data = props.dataList;
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      {data.map((item, index) => (
        <Card
          key={index}
          variant="outlined"
          sx={{
            width: "100%",
            borderRadius: 3,
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            overflow: "hidden",
          }}
        >
          <Grid container>
            <Grid item xs={8}>
              <CardContent>
                <Typography variant="h6">{item.text}</Typography>
                <Box mt={2}>
                  <Button
                    variant="text"
                    color="primary"
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Link
                  </Button>
                </Box>
              </CardContent>
            </Grid>
            <Grid item xs={4}>
              <CardMedia
                sx={{
                  height: "100%", // This sets the height of the CardMedia to match the height of the CardContent.
                  backgroundSize: "cover", // This ensures the image covers the entire available space.
                }}
                component="div" // Changing this to div to handle the background image.
                image={item.image}
                alt={item.text}
              />
            </Grid>
          </Grid>
        </Card>
      ))}
    </Box>
  );
}
