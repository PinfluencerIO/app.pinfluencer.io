import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { HashRouter } from "react-router-dom";
import AvatarMenu from ".";

test("should have sign in button for unauthenticated users", async () => {
  const user = undefined;
  const signin = () => {};
  const signout = () => {};
  render(<AvatarMenu user={user} signin={signin} signout={signout} />, {
    wrapper: HashRouter,
  });
  const element = screen.getByRole("button", { name: "Sign In" });
  expect(element).toBeInTheDocument();
});
test("should have sign out button for authenticated users", async () => {
  const user = {};
  const signin = () => {};
  const signout = () => {};
  render(<AvatarMenu user={user} signin={signin} signout={signout} />, {
    wrapper: HashRouter,
  });
  const element = screen.getByRole("button", { name: "Sign Out" });
  expect(element).toBeInTheDocument();
});
