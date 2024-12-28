"use client";

import React, { useState } from "react";

import Header from "@/components/Header";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import "../styles/globals.css";
let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function RootLayout({ children }) {
  const [activeSection, setActiveSection] = useState("");

  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <Header activeSection={activeSection} setActiveSection={setActiveSection}/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
