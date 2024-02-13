import React, { useState } from "react";
import "./NewGoalForm.css";

const NewGoalForm = (props) => {
  const [goalText, setGoalText] = useState("");

  const addGoalHandler = (event) => {
    event.preventDefault();

    const newGoal = {
      id: Math.random().toString(),
      text: goalText,
    };

    setGoalText("");

    props.onAddGoal(newGoal);
  };

  const goalTextChangeHandler = (event) => {
    setGoalText(event.target.value);
  };

  return (
    <form className="new-goal-form" onSubmit={addGoalHandler}>
      <input
        type="text"
        data-testid="goalText"
        placeholder="Enter goal"
        value={goalText}
        onChange={goalTextChangeHandler}
      />
      <button type="submit" data-testid="addButton">
        Add Goal
      </button>
    </form>
  );
};

export default NewGoalForm;
