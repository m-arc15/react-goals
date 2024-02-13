/* eslint-disable testing-library/no-unnecessary-act */
import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import NewGoalForm from "./NewGoalForm";
import userEvent from "@testing-library/user-event";

describe("<NewGoalForm />", () => {
  it("renders goal input and add button", () => {
    render(<NewGoalForm />);

    expect(screen.getByTestId("goalText")).toBeInTheDocument();
    expect(screen.getByTestId("addButton")).toBeInTheDocument();
  });

  describe("clicking the add button", () => {
    let mockOnAddGoal;
    const mockGoal = "Learn something new";

    beforeEach(() => {
      mockOnAddGoal = jest.fn();
    });

    function addGoal(newGoal) {
      render(<NewGoalForm onAddGoal={mockOnAddGoal} />);

      act(() => {
        newGoal !== "" &&
          userEvent.type(screen.getByTestId("goalText"), newGoal);
      });

      act(() => {
        userEvent.click(screen.getByTestId("addButton"));
      });
    }

    it("clears the input field", async () => {
      addGoal(mockGoal);
      expect(screen.getByTestId("goalText").value).toEqual("");
    });

    it("calls onAddGoal prop with new goal object when form is submitted", () => {
      addGoal(mockGoal);
      expect(mockOnAddGoal).toHaveBeenCalledWith({
        id: expect.any(String),
        text: mockGoal,
      });
    });

    it("does not call onAddGoal prop with empty goal text when form is submitted", () => {
      addGoal("");
      expect(mockOnAddGoal).not.toHaveBeenCalled();
    });
  });
});
