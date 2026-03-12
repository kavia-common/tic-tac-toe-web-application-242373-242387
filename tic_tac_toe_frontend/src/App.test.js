import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders game title and restart button", () => {
  render(<App />);

  expect(
    screen.getByRole("heading", { name: /tic tac toe/i })
  ).toBeInTheDocument();

  expect(screen.getByRole("button", { name: /restart/i })).toBeInTheDocument();
});
