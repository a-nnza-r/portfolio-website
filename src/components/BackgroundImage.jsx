import React from "react";

const BackgroundImage = ({ imageUrl, opacity }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        opacity: opacity,
        zIndex: -1,
      }}
    />
  );
};

export default BackgroundImage;
