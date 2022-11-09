import { render, screen } from "@testing-library/react";
import "intersection-observer";
import { BrowserRouter } from "react-router-dom";
import underTest from "../../../test/underTest";
import HorizontalNavigation from "./HorizontalNavigation";

test("brands should have listings nav item", () => {
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

  expect(screen.getByText("Listings")).toBeTruthy();
});
