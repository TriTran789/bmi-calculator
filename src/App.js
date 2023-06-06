import "./App.css";
import { useState } from "react";

function Result({ weight, height }) {
  const BMI = weight / ((height / 100) * (height / 100));

  return (
    <>
      <p className="my-3">Your BMI is</p>
      <div className="bg-[#1b1096] text-white inline-block px-6 py-2 rounded-3xl mb-3">
        {BMI.toFixed(1)}
      </div>
    </>
  );
}

function RangeInput({ type, unit, min, max, value, setValue }) {
  function handleOnChange(e) {
    setValue(e.target.value);
  }

  return (
    <>
      <p className="text-left py-2 pl-[15%]">
        {type}: {value} {unit}
      </p>
      <input
        className="w-[70%]"
        type="range"
        step="1"
        min={min}
        max={max}
        onChange={(e) => handleOnChange(e)}
      />
    </>
  );
}

function ProjectName({ projectName }) {
  return (
    <h1 className="text-4xl blod font-bold text-white bg-[#1b1096] px-10 py-5">
      {projectName}
    </h1>
  );
}

function App() {
  const [weight, setWeight] = useState(50);
  const [height, setHeight] = useState(150);

  return (
    <div className="App">
      <ProjectName projectName="Project 7: BMI Calculator" />
      <div className="body bg-white">
        <RangeInput
          type="Weight"
          unit="kg"
          min="40"
          max="220"
          value={weight}
          setValue={setWeight}
        />
        <RangeInput
          type="Height"
          unit="cm"
          min="150"
          max="220"
          value={height}
          setValue={setHeight}
        />
        <Result weight={weight} height={height} />
      </div>
    </div>
  );
}

export default App;
