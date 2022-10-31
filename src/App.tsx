import "./App.css";
import { TimerDisplay } from "./components/timer";
import { Timer } from "./timer";

function App({}) {
  return (
    <div>
      <h1 className="text-indigo-400 text-4xl"> Pomodero Timer </h1>
      {/* timer display*/}
      <TimerDisplay time={"121"} />
    </div>
  );
}

export default App;
