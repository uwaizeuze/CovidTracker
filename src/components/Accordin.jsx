import React, { useState } from "react";
import "../Styles/Accordin.css";
import Question from "./AccordinApi";
import MyAccordin from "./MyAccordin";

const Accordin = () => {
  const [Data, setData] = useState(Question);
  console.log(Data);
  return (
    <>
      <section className="accordin__container">
        <div className="accordin__heading">
          <h1 className="accordin__title">React js Interview Question</h1>
        </div>

        <div className="accordin__content">
          {Data.map((currElement) => {
            const { id } = currElement;
            return <MyAccordin key={id} {...currElement} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Accordin;
