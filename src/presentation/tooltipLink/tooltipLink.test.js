import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { HashRouter } from "react-router-dom";
import TooltipLink from "../tooltipLink/TooltipLink";

test("should pass on tooltip text, route, and render children", () => {
  render(
    <TooltipLink title="Home" route="/">
      <h3>Label</h3>
    </TooltipLink>,
    {
      wrapper: HashRouter,
    }
  );
  const element = screen.getByRole("link", { name: "Home" });
  expect(element).toHaveAttribute("href", "#/");
  expect(element).toHaveTextContent("Label");
});
