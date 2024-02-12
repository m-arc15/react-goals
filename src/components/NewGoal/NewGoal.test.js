import { render, screen } from "@testing-library/react";
import NewGoal from "./NewGoal";

test("renders new goal component (with enter goal field and add button)", () => {
  render(<NewGoal />);
  const inputElement = screen.getByPlaceholderText("Enter goal");
  expect(inputElement).toBeInTheDocument();

  const addButton = screen.getByText("Add Goal");
  expect(addButton).toBeInTheDocument();
});
