import { render, screen } from "@testing-library/react";
import App from "./App";

test('renders title "Goals"', () => {
  render(<App />);
  const titleElement = screen.getByText("Goals");
  expect(titleElement).toBeInTheDocument();
});
