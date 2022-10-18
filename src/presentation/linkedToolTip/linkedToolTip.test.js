import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { HashRouter } from "react-router-dom";
import LinkedToolTip from ".";

test("should pass on tooltip text, route, and render children", () => {
  render(
    <LinkedToolTip title="Home" route="/">
      <h3>Label</h3>
    </LinkedToolTip>,
    {
      wrapper: HashRouter,
    }
  );
  const element = screen.getByRole("link", { name: "Home" });
  expect(element).toHaveAttribute("href", "#/");
  expect(element).toHaveTextContent("Label");
});
