import React from "react";

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
    <div className="bg-deep-blue w-full m-0 flex justify-center items-center">
      {socialsData.map((social) => (
        <a
          key={social.name}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block m-1 hover:bg-vibrant-blue rounded-full p-2"
        >
          <img src={social.icon} alt={social.name} className="w-6 h-6" />
          {/* Image icon is 6x6 in size with margin 1, padding 2, and will change background color on hover */}
        </a>
      ))}
    </div>
  );
}

export default Socials;
