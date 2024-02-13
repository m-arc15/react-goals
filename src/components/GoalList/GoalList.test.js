import { render, screen } from "@testing-library/react";
import GoalList from "./GoalList";

describe("<GoalList />", () => {
  it("renders goals list", () => {
    const lifeGoals = [
      { id: "lg1", text: "Career Success" },
      { id: "lg2", text: "Personal Growth and Development" },
      { id: "lg3", text: "Financial Security and Stability" },
    ];

    render(<GoalList goals={lifeGoals} />);

    lifeGoals.forEach((goal) => {
      expect(screen.getByText(goal.text)).toBeInTheDocument();
    });
  });
});
