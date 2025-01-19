import React, { useState } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

export default function PdfPage(props) {
    const fileUrl = props.dataList.fileUrl; // Assuming fileUrl is passed as a prop
  
    return (
      <div>
        <div 
        style={{
            position: "relative",
            width: "100%",
            height: "0",
            paddingTop: "56.25%", // Aspect ratio
            paddingBottom: "0",
            boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
            marginTop: "1.6em",
            marginBottom: "0.9em",
            overflow: "hidden",
            borderRadius: "8px",
            willChange: "transform",
            }}
        >
        <iframe 
            loading="lazy" 
            style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: "0",
                left: "0",
                border: "none",
                padding: "0",
                margin: "0",
              }}
            src={fileUrl}
            allowfullscreen="allowfullscreen" 
            allow="fullscreen">
        </iframe>
        </div>
    </div>
    );
  }
  
