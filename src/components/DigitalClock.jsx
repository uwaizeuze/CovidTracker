import React, { useState } from "react";

const DigitalClock = () => {
  let time = new Date().toLocaleTimeString();
  const [Dtime, setDtime] = useState(time);
  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setDtime(time);
  };
  setInterval(UpdateTime, 1000);
  return (
    <div>
      <h1>{Dtime}</h1>
    </div>
  );
};

export default DigitalClock;
