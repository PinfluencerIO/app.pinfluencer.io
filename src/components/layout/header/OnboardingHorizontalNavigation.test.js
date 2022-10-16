import { ThemeProvider } from "@mui/material";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import pinfluencerTheme from "../../../theme";
import { OnboardingHorizontalNavigation } from "./OnboardingHorizontalNavigation";

test("should have onboarding menu item", () => {
  render(
    <ThemeProvider theme={pinfluencerTheme}>
      <OnboardingHorizontalNavigation />
    </ThemeProvider>,
    { wrapper: BrowserRouter }
  );
  expect(screen.getByText("Onboarding")).toBeTruthy();
});
