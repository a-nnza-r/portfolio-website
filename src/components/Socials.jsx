import { Container, IconButton } from "@mui/material";

const socialsData = [
  {
    name: "LinkedIn",
    icon: "/linkedinIcon.webp",
    link: "https://www.linkedin.com/in/ansarahmed11/",
  },
  {
    name: "GitHub",
    icon: "/github-mark-white.svg",
    link: "https://github.com/a-nnza-r",
  },
];

const styles = {
  container: {
    backgroundColor: "#040424", // Deep blue color
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  iconButton: {
    margin: "0 5px",
  },
};

function Socials() {
  return (
    <Container style={styles.container}>
      {socialsData.map((social) => (
        <IconButton
          key={social.name}
          style={styles.iconButton}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={social.icon} alt={social.name} width={24} height={24} />
        </IconButton>
      ))}
    </Container>
  );
}

export default Socials;
