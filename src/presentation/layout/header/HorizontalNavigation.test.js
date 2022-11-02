import { render, screen } from "@testing-library/react";
import "intersection-observer";
import { BrowserRouter } from "react-router-dom";
import underTest from "../../../test/underTest";
import HorizontalNavigation from "./HorizontalNavigation";

test("brands should have dashboard, campiagns and collaborations", () => {
  render(
    underTest(
      {
        givenName: "given",
        familyName: "family",
        email: "email@domain.tld",
        "custom:usertype": "brand",
      },
      <HorizontalNavigation />
    ),
    { wrapper: BrowserRouter }
  );
  expect(screen.getByText("Dashboard")).toBeTruthy();
  expect(screen.getByText("Listings")).toBeTruthy();
  expect(screen.getByText("Collaborations")).toBeTruthy();
});

test("influencers should have dashboard, collaborations", () => {
  render(
    underTest(
      {
        givenName: "given",
        familyName: "family",
        email: "email@domain.tld",
        "custom:usertype": "influencer",
      },
      <HorizontalNavigation userType="influencer" />
    ),
    { wrapper: BrowserRouter }
  );
  expect(screen.getByText("Dashboard")).toBeTruthy();

  expect(screen.getByText("Collaborations")).toBeTruthy();
});
