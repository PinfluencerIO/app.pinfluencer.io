import { ThemeProvider } from "@mui/material";
import { render, screen } from "@testing-library/react";
import "intersection-observer";
import { BrowserRouter } from "react-router-dom";
import UserContext from "../../../context/UserContext";
import pinfluencerTheme from "../../../theme";
import { HorizontalNavigation } from "./HorizontalNavigation";

test("brands should have dashboard, campiagns and collaborations", () => {
  const underTest = (user) => {
    return (
      <ThemeProvider theme={pinfluencerTheme}>
        <UserContext.Provider value={{ user: user, onboard: null }}>
          <HorizontalNavigation userType="brand" />
        </UserContext.Provider>
      </ThemeProvider>
    );
  };
  render(
    underTest({
      givenName: "given",
      familyName: "family",
      email: "email@domain.tld",
      "custom:usertype": "brand",
    }),
    { wrapper: BrowserRouter }
  );
  expect(screen.getByText("Dashboard")).toBeTruthy();
  expect(screen.getByText("Campaigns")).toBeTruthy();
  expect(screen.getByText("Collaborations")).toBeTruthy();
});

test("influencers should have dashboard, collaborations", () => {
  const underTest = (user) => {
    return (
      <ThemeProvider theme={pinfluencerTheme}>
        <UserContext.Provider value={{ user: user, onboard: null }}>
          <HorizontalNavigation userType="influencer" />
        </UserContext.Provider>
      </ThemeProvider>
    );
  };
  render(
    underTest({
      givenName: "given",
      familyName: "family",
      email: "email@domain.tld",
      "custom:usertype": "influencer",
    }),
    { wrapper: BrowserRouter }
  );
  expect(screen.getByText("Dashboard")).toBeTruthy();

  expect(screen.getByText("Collaborations")).toBeTruthy();
});
