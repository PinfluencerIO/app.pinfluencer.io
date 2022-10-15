import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import React from "react";
import { remote } from "../../../api/api";
import { InitialsAvatar } from "./InitialsAvatar";

const server = setupServer(
  rest.get(`/${remote}/brands/me`, (req, res, ctx) => {
    return res(
      ctx.json({
        given_name: "Given",
        family_name: "Family",
        email: "email3@domain.tld",
        "custom:usertype": "influencer",
        picture: "./assets/redshoes.png",
      })
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("null user has default profile icon", () => {
  const { container } = render(<InitialsAvatar />);
  const element = container.querySelector('[data-testid="PersonIcon"]');
  expect(element).toBeTruthy();
});
test("user without picture gets default icon with initials", () => {
  render(
    <InitialsAvatar
      user={{
        given_name: "Given",
        family_name: "Family",
        email: "email2@domain.tld",
        "custom:usertype": "influencer",
      }}
    />
  );
  const element = screen.getByText("GF");
  expect(element).toBeTruthy();
});
test("user with picture should use it", () => {
  render(
    <InitialsAvatar
      user={{
        given_name: "Given",
        family_name: "Family",
        email: "email2@domain.tld",
        "custom:usertype": "influencer",
        picture: "./assets/redshoes.png",
      }}
    />
  );
  const element = screen.getByRole("img");
  expect(element.src).toContain("/assets/redshoes.png");
});
