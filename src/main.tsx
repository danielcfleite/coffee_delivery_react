import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default.ts";
import { GlobalStyle } from "./styles/Global.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
