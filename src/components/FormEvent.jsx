import React, { useState } from "react";
import "../Styles/FormEvent.css";

const FormEvent = () => {
  const [Name, setName] = useState("");
  const [LastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  const [fullLastName, setFullLastName] = useState("");
  const InputEventOne = (event) => {
    setName(event.target.value);
  };
  const InputEventTwo = (event) => {
    setLastName(event.target.value);
  };

  const SubmitForm = (event) => {
    event.preventDefault();
    setFullName(Name);
    setFullLastName(LastName);
  };
  return (
    <>
      <form className="form__container" onSubmit={SubmitForm}>
        <h1 className="form__title">
          Hello!{fullName}
          {fullLastName}
        </h1>
        <input
          type="text"
          className="form__input"
          placeholder="Enter Your name"
          value={Name}
          onChange={InputEventOne}
        />
        <br />
        <input
          type="text"
          className="form__input"
          placeholder="Enter Your password"
          value={LastName}
          onChange={InputEventTwo}
        />
        <br />
        <button type="submit" className="btn__form">
          Click me 👍
        </button>
      </form>
    </>
  );
};

export default FormEvent;
