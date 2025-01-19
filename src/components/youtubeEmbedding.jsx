import React from "react";

export default function YoutubeEmbedding(props) {
  const link = props.link;
  return (
    <div>
      <iframe
      className="w-full h-full aspect-video"
  src="https://www.youtube.com/embed/KLRkWafdvCo?si=h8NirSFg8Xyq-9bS"
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
></iframe>
    </div>
  );
}
