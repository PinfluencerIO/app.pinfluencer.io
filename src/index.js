import * as React from "react";
import ReactDOM from "react-dom/client";
import { StyledEngineProvider } from "@mui/material/styles";
import App from "./App";
import { UserProvider } from "./context/UserContext";
import lightTheme from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={lightTheme}>
            <CssBaseline />
            <App />
          </ThemeProvider>
        </StyledEngineProvider>
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>
);
