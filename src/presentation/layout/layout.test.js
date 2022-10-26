import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";
import underTest from "../../test/underTest";
import Layout from "../layout/Layout";

test("should have nav main footer layout structure", async () => {
  const { container } = render(underTest(undefined, <Layout />), {
    wrapper: BrowserRouter,
  });
  let element = await screen.findByRole("navigation");
  expect(element).toBeInTheDocument();

  element = await screen.findByRole("main");
  expect(element).toBeInTheDocument();

  element = await container.querySelector("footer");
  expect(element).toBeInTheDocument();
});
