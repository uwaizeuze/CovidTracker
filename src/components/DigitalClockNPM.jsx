import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
// import Clock from "react-live-clock";

const DigitalClockNPM = () => {
  return (
    <>
      <CountdownCircleTimer
        isPlaying
        duration={30}
        colors={[
          ["#770049", 0.35],
          ["#01caf7", 0.13],
          ["#A30000", 0.23],
        ]}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>

      {/* <Clock format={"HH:mm:ss"} ticking={true} timezone={"US/Pacific"} /> */}
    </>
  );
};

export default DigitalClockNPM;
