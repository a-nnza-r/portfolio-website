import React from "react";
import { IconButton, Container } from "@mui/material";

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

function Socials() {
  return (
    <Container className="max-w-none w-full flex justify-center items-center py-2 bg-deep-blue">
      {" "}
      {/* Applied background color */}
      {socialsData.map((social) => (
        <IconButton
          key={social.name}
          className="m-1 hover:bg-vibrant-blue rounded-full"
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={social.icon} alt={social.name} className="w-6 h-6" />{" "}
          {/* Tailwind classes for width and height */}
        </IconButton>
      ))}
    </Container>
  );
}

export default Socials;
