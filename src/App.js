import NewGoalForm from "./components/NewGoal/NewGoalForm";
import "./App.css";

const App = () => {
  return (
    <div className="goals">
      <h2>Goals</h2>
      <NewGoalForm />
    </div>
  );
};

export default App;
