import { ThemeProvider } from "@mui/material";
import { render, screen } from "@testing-library/react";
import "intersection-observer";
import { BrowserRouter } from "react-router-dom";
import UserContext from "../../../context/UserContext";
import pinfluencerTheme from "../../../theme";
import { Header } from "./Header";

test("should display onboarding nav when authenticated user has not completed onboarding", () => {
  render(
    <ThemeProvider theme={pinfluencerTheme}>
      <UserContext.Provider value={{ user: undefined, onboard: null }}>
        <Header isAuthenticated={true} isOnboarded={false} />
      </UserContext.Provider>
    </ThemeProvider>,
    { wrapper: BrowserRouter }
  );
  expect(screen.getByText("Onboarding")).toBeTruthy();
});

test("should display usertype nav when authenticated user has completed onboarding", () => {
  render(
    <ThemeProvider theme={pinfluencerTheme}>
      <UserContext.Provider value={{ user: undefined, onboard: null }}>
        <Header isAuthenticated={true} isOnboarded={true} userType="brand" />
      </UserContext.Provider>
    </ThemeProvider>,
    { wrapper: BrowserRouter }
  );
  expect(screen.getByText("Dashboard")).toBeTruthy();
});
