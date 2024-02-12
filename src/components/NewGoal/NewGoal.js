import React from "react";
import "./NewGoal.css";

const NewGoal = () => {
  return (
    <form className="new-goal">
      <input type="text" data-testid="newGoalInput" placeholder="Enter goal" />
      <button type="submit" data-testid="newGoalButton">
        Add Goal
      </button>
    </form>
  );
};

export default NewGoal;
