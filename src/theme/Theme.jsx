import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    color1: "#fff", // White
    color2: "#1e1e1e", // Black
  },
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
  },
};

const Theme = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default Theme;
