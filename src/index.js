import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { ThemeProvider, ColorModeProvider, CSSReset } from "@chakra-ui/core";

import theme from "./theme";
console.log("%ctheme", "color: #00e600", theme);

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <ColorModeProvider>
      <CSSReset />
      <App />
    </ColorModeProvider>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
