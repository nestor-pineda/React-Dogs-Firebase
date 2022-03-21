import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    color1: "#fff", // White
    color2: "#1e1e1e", // Black
    color3: "#eee", // Light Grey
  },
  fontSizes: {
    xsmall: "1em",
    small: "1.5em",
    medium: "2em",
    large: "3em",
  },
  fontWeight: {
    thin: "300",
    medium: "400",
    bold: "500",
  },
};

const Theme = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default Theme;
