import { render, screen } from "@testing-library/react";
import "intersection-observer";
import { BrowserRouter } from "react-router-dom";
import Header from ".";
import underTest from "../../test/underTest";

test("should display onboarding nav when authenticated user has not completed onboarding", () => {
  render(
    underTest(
      {
        given_name: "given",
        family_name: "family",
        email: "email@domain.tld",
        "custom:usertype": "influencer",
      },
      <Header isAuthenticated={true} isOnboarded={false} />
    ),
    {
      wrapper: BrowserRouter,
    }
  );
  expect(screen.getByText("Onboarding")).toBeTruthy();
});

test("should display usertype nav when authenticated user has completed onboarding", () => {
  render(
    underTest(
      {
        given_name: "given",
        family_name: "family",
        email: "email@domain.tld",
        "custom:usertype": "influencer",
      },
      <Header isAuthenticated={true} isOnboarded={true} userType="brand" />
    ),
    { wrapper: BrowserRouter }
  );
  expect(screen.getByText("Dashboard")).toBeTruthy();
});
