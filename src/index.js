import * as React from "react";
import ReactDOM from "react-dom/client";
import { StyledEngineProvider } from "@mui/material/styles";
import App from "./App";
import { UserProvider } from "./context/UserContext";
import pinfluencerTheme from "./theme";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "@fontsource/comfortaa/300.css";
import "@fontsource/comfortaa/400.css";
import "@fontsource/comfortaa/500.css";
import "@fontsource/comfortaa/700.css";

ReactDOM.createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <CssBaseline />
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={pinfluencerTheme}>
            <App />
          </ThemeProvider>
        </StyledEngineProvider>
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>
);
