import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import underTest from "../../../test/underTest";
import { OnboardingHorizontalNavigation } from "./OnboardingHorizontalNavigation";

test("should have onboarding menu item", () => {
  render(underTest(null, <OnboardingHorizontalNavigation />), {
    wrapper: BrowserRouter,
  });
  expect(screen.getByText("Onboarding")).toBeTruthy();
});
