import React, { useState } from "react";
import "../Styles/Clock.css";

const Clock = () => {
  let currentTime = new Date();
  currentTime = currentTime.toLocaleTimeString();
  const [currentTimeValue, setcurrentTimeValue] = useState(currentTime);

  const UpdateClock = () => {
    console.log("Update clock");
    currentTime = new Date().toLocaleTimeString();
    setcurrentTimeValue(currentTime);
  };

  return (
    <div>
      <h1 className="clock__time">{currentTimeValue}</h1>
      <button onClick={UpdateClock} className="clock__button">
        Get time
      </button>
    </div>
  );
};

export default Clock;
