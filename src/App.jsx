import { useState } from "react";
import Timer from "./components/Timer";
import "./App.css";
import mixing from "./assets/whisk-and-bowl-svgrepo-com.png";
import rest from "./assets/sleep-svgrepo-com.png";
import bake from "./assets/bake-svgrepo-com.png";
import cool from "./assets/ventilator-cool-svgrepo-com.png";

//clarify the steps
const steps = [
  { id: 1, name: "1. Mix the ingredients", duration: 300, cover: mixing },
  { id: 2, name: "2. Let the dough rest", duration: 1800, cover: rest },
  { id: 3, name: "3. Bake", duration: 720, cover: bake },
  { id: 4, name: "4. Leave to cool", duration: 600, cover: cool },
];

//variable pour stocker l'étape sélectionnée et modifier la variable
function App() {
  const [activeStep, setActiveStep] = useState(null);

  return (
    <div className="app">
      <h1>Biscuits Timer</h1>
      <h2>Click on a step to start the timer: </h2>
      <div className="buttons">
        {/* à chaque bouton on active les étapes */}
        {steps.map((step) => (
          <button key={step.id} onClick={() => setActiveStep(step)}>
            {step.cover && <img src={step.cover} alt={step.name} />}
            {step.name}
          </button>
        ))}
      </div>
      {activeStep && (
        <Timer key={activeStep.id} duration={activeStep.duration} />
      )}
    </div>
  );
}

export default App;
