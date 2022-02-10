import React, { useState } from "react";
import "../Styles/EventHandle.css";

const EventHandle = () => {
  let pink = "#FF1493";
  const [bg, setNg] = useState(pink);
  const [Name, setName] = useState("Click__me!!");

  const BgChange = () => {
    let Gold = "#FFFF00";
    setNg(Gold);
    setName("Convert to Gold😍");
  };

  const BktoPurPle = () => {
    setNg(pink);
    setName("Back to Pink 🏳️‍⚧️");
  };
  return (
    <div style={{ backgroundColor: bg }}>
      <button onClick={BgChange} onDoubleClick={BktoPurPle}>
        {Name}
      </button>
    </div>
  );
};

export default EventHandle;
