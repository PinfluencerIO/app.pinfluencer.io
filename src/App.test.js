import { ThemeProvider } from "@mui/material";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import UserContext from "./context/UserContext";
import pinfluencerTheme from "./theme";

test("test home page title", async () => {
  const UnderTest = () => (
    <BrowserRouter>
      <ThemeProvider theme={pinfluencerTheme}>
        <UserContext.Provider value={{ user: null, onboard: null }}>
          <App />
        </UserContext.Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
  render(<UnderTest />);
  expect(document.title).toBe("Pinfuencer - Home");
});
