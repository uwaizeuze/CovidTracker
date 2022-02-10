import React, { useState } from "react";
import "../Styles/FormEvent.css";

const ComplexHandleForm = () => {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    qual: "",
  });

  const InputEvent = (event) => {
    console.log(event.target.name);
    console.log(event.target.value);
    // const name = event.target.name;
    // const value = event.target.value;
    const { value, name } = event.target;

    setFullName((prevalue) => {
      console.log(prevalue);

      /// short version

      return {
        ...prevalue,
        [name]: value,
      };
      // if (name === "fname") {
      //   return {
      //     fname: value,
      //     lname: prevalue.lname,
      //     email: prevalue.email,
      //     phone: prevalue.phone,
      //   };
      // } else if (name === "lname") {
      //   return {
      //     fname: prevalue.fname,
      //     lname: value,
      //     email: prevalue.email,
      //     phone: prevalue.phone,
      //   };
      // } else if (name === "email") {
      //   return {
      //     fname: prevalue.fname,
      //     lname: prevalue.lname,
      //     email: value,
      //     phone: prevalue.phone,
      //   };
      // } else if (name === "phone") {
      //   return {
      //     fname: prevalue.fname,
      //     lname: prevalue.lname,
      //     email: prevalue.email,
      //     phone: value,
      //   };
      // }
    });
  };
  const SubmitForm = (event) => {
    event.preventDefault();
    alert("Form submit");
  };
  return (
    <>
      <form className="form__container" onSubmit={SubmitForm}>
        <h1 className="form__title">
          hello!! {fullName.fname} {fullName.lname}
        </h1>
        <p>{fullName.email}</p>
        <br />
        <p>{fullName.phone}</p>
        <br />
        <p>{fullName.qual}</p>

        <input
          type="text"
          className="form__input"
          placeholder="Enter the Name"
          name="fname"
          value={fullName.fname}
          onChange={InputEvent}
        />
        <br />
        <input
          type="text"
          className="form__input"
          placeholder="Enter the  last Name"
          name="lname"
          value={fullName.lname}
          onChange={InputEvent}
        />
        <br />
        <input
          type="email"
          className="form__input"
          placeholder="Enter the email"
          name="email"
          value={fullName.email}
          onChange={InputEvent}
        />
        <br />

        <input
          type="phone"
          className="form__input"
          placeholder="Enter the phone number"
          name="phone"
          value={fullName.phone}
          onChange={InputEvent}
        />
        <br />
        <input
          type="phone"
          className="form__input"
          placeholder="Enter the  qualification"
          name="qual"
          value={fullName.qual}
          onChange={InputEvent}
        />
        <br />

        <button type="submit" className="btn__form">
          Click me 👍
        </button>
      </form>
    </>
  );
};

export default ComplexHandleForm;
