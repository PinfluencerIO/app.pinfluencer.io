import { ThemeProvider } from "@mui/material";
import { render } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";

import "intersection-observer";
import App from "./App";
import UserContext from "./context/UserContext";
import pinfluencerTheme from "./theme";

const underTest = (user) => {
  return (
    <ThemeProvider theme={pinfluencerTheme}>
      <UserContext.Provider value={{ user: user, onboard: null }}>
        <App />
      </UserContext.Provider>
    </ThemeProvider>
  );
};

test("should stay on home page for unauthenticated users", async () => {
  render(underTest(null), { wrapper: BrowserRouter });
  expect(document.title).toBe("Pinfluencer - Home");
});

test("should navigate to onboarding for authenticated non-onboarded user", () => {
  render(
    underTest({
      givenName: "given",
      familyName: "family",
      email: "email@domain.tld",
    }),
    { wrapper: BrowserRouter }
  );
  expect(document.title).toBe("Pinfluencer - onboarding");
});

test("should navigate away from onboarding for authenticated onboarded user", () => {
  const badRoute = "/onboarding";
  const Test = () =>
    underTest({
      given_name: "given",
      family_name: "family",
      email: "email@domain.tld",
      "custom:usertype": "influencer",
    });
  render(
    <MemoryRouter initialEntries={[badRoute]}>
      <Test />
    </MemoryRouter>
  );
  expect(document.title).toBe("Pinfluencer - Home");
});
