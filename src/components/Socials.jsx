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
    <Container className="bg-deep-blue w-full flex justify-center items-center py-2">
      {socialsData.map((social) => (
        <IconButton
          key={social.name}
          className="m-1 hover:bg-vibrant-blue rounded-full"
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={social.icon} alt={social.name} className="w-6 h-6" />
          {/* Icons are 6x6 in size with margin 1 and will change background color on hover */}
        </IconButton>
      ))}
    </Container>
  );
}

export default Socials;
