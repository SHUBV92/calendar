import { render, screen } from "@testing-library/react";
import Buttons from "./Button";

test("renders learn react link", () => {
  render(<Buttons />);
  const linkElement = screen.getByRole("button");

  expect(linkElement).toBeInTheDocument();
});
