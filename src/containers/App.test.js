import { render } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";

import "intersection-observer";
import underTest from "../test/underTest";
import App from "./App";

test("should stay on home page for unauthenticated users", async () => {
  render(underTest(null, <App />), { wrapper: BrowserRouter });
  expect(document.title).toBe("Pinfluencer - Home");
});

test("should navigate to onboarding for authenticated non-onboarded user", () => {
  render(
    underTest(
      {
        givenName: "given",
        familyName: "family",
        email: "email@domain.tld",
      },
      <App />
    ),
    { wrapper: BrowserRouter }
  );
  expect(document.title).toBe("Pinfluencer - onboarding");
});

test("should navigate away from onboarding for authenticated onboarded user", () => {
  const badRoute = "/onboarding";
  render(
    <MemoryRouter initialEntries={[badRoute]}>
      {underTest(
        {
          given_name: "given",
          family_name: "family",
          email: "email@domain.tld",
          "custom:usertype": "influencer",
        },
        <App />
      )}
    </MemoryRouter>
  );
  expect(document.title).toBe("Pinfluencer - Home");
});
