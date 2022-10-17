import "@fontsource/comfortaa/300.css";
import "@fontsource/comfortaa/400.css";
import "@fontsource/comfortaa/500.css";
import "@fontsource/comfortaa/700.css";
import CssBaseline from "@mui/material/CssBaseline";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import * as React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import { UserProvider } from "./context/UserContext";
import pinfluencerTheme from "./theme";

ReactDOM.createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
    <UserProvider>
      <HashRouter>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={pinfluencerTheme}>
            <CssBaseline />
            <App />
          </ThemeProvider>
        </StyledEngineProvider>
      </HashRouter>
    </UserProvider>
  </React.StrictMode>
);
