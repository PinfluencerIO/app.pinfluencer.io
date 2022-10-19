import { Avatar } from "@mui/material";
import { render, screen } from "@testing-library/react";
import IconMenu from "./IconMenu";

test("should call override click handler when defined", () => {
  let success = false;
  const override = () => {
    success = true;
  };
  render(
    <IconMenu clickHandlerOverride={override} icon={<Avatar />} items={[]} />
  );
  const element = screen.getByRole("button", { name: /Menu action/i });
  element.click();
  expect(success).toBeTruthy();
});

test("should default to menu action when name not defined", () => {
  render(<IconMenu icon={<Avatar />} items={[]} />);

  expect(screen.getByRole("button", { name: /Menu action/i })).toBeTruthy();
});

test("should use defined name for aria label", () => {
  render(<IconMenu icon={<Avatar />} items={[]} name={"not default"} />);

  expect(screen.getByRole("button", { name: /not default/i })).toBeTruthy();
});
