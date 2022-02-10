import React, { useState } from "react";

const MyAccordin = ({ Question, Answer }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <section className="MyAccordin__container">
        <div className="MyAccordin__Question__box ">
          <p onClick={() => setShow(!show)} className="MyAccordin__button">
            {show ? "-" : "+"}
          </p>
          <p className="MyAccordin__Question">{Question}</p>
        </div>

        {show && <p>{Answer}</p>}
      </section>
    </>
  );
};

export default MyAccordin;
