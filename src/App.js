import NewGoalForm from "./components/NewGoal/NewGoalForm";
import "./App.css";
import GoalList from "./components/GoalList/GoalList";
import { useState } from "react";

const App = () => {
  const [lifeGoals, setLifeGoals] = useState([
    { id: "lg1", text: "Career Success" },
    { id: "lg2", text: "Personal Growth and Development" },
    { id: "lg3", text: "Financial Security and Stability" },
  ]);

  const addNewGoalHandler = (newGoal) => {
    setLifeGoals((prevLifeGoals) => prevLifeGoals.concat(newGoal));
  };

  return (
    <div className="goals">
      <h2>Goals</h2>
      <NewGoalForm onAddGoal={addNewGoalHandler} />
      <GoalList goals={lifeGoals} />
    </div>
  );
};

export default App;
