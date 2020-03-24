import React from "react";
import { ThemeProvider, ColorModeProvider, CSSReset, theme } from "@chakra-ui/core";

import HomePage from "./HomePage";

console.log("%ctheme", "color: #00e600", theme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <HomePage />
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default App;
