import React, { useState } from "react";

const socialsData = [
  {
    name: "LinkedIn",
    type: "redirectLink",
    icon: "/linkedinIcon.webp",
    link: "https://www.linkedin.com/in/ansarahmed11/",
  },
  {
    name: "GitHub",
    type: "redirectLink",
    icon: "/github-mark-white.svg",
    link: "https://github.com/a-nnza-r",
  },
  {
    name: "Email",
    type: "copyToClipboard",
    icon: "/mail.svg",
    link: "mansarahmed01@gmail.com",
  },
];

function Socials() {
  const [showPopup, setShowPopup] = useState(false);

  const handleCopyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 1000); // Hide the popup after 2 seconds
  };

  return (
    <>
      {/* Popup Notification */}
      {showPopup && (
        <div className="fixed z-50 px-4 py-2 text-white bg-black rounded-md shadow-lg top-5 right-5">
          Copied to clipboard!
        </div>
      )}

      <div className="fixed z-20 flex flex-row items-center justify-center px-3 py-1 m-0 shadow-lg bottom-5 md:right-5 md:bottom-5 md:flex-col h-fit right-[20%] w-[60%] md:w-fit bg-blue-950 rounded-xl">
        {socialsData.map((social) => {
          if (social.type === "redirectLink") {
            // Onclick redirect to link
            return (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block p-2 m-1 rounded-full hover:bg-vibrant-blue"
              >
                <img src={social.icon} alt={social.name} className="w-6 h-6" />
                {/* Image icon is 6x6 in size with margin 1, padding 2, and will change background color on hover */}
              </a>
            );
          } else {
            // Onclick copy to clipboard
            return (
              <div
                key={social.name}
                onClick={() => handleCopyToClipboard(social.link)}
                className="inline-block p-2 m-1 rounded-full cursor-pointer hover:bg-vibrant-blue"
              >
                <img src={social.icon} alt={social.name} className="w-6 h-6" />
                {/* Image icon is 6x6 in size with margin 1, padding 2, and will change background color on hover */}
              </div>
            );
          }
        })}
      </div>
    </>
  );
}

export default Socials;
