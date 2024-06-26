"use client";

import Header from "@/components/Header";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import "../styles/globals.css";
let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
