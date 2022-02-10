import React, { useState } from "react";
import "../Styles/TodoList.css";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Mlist from "./Mlist";

const MtodoList = () => {
  const [inputValue, setInputlist] = useState("");
  const [Items, setItems] = useState([]);
  const InputEvent = (event) => {
    setInputlist(event.target.value);
  };
  const Listofitem = () => {
    setItems((prevalue) => {
      return [...prevalue, inputValue];
    });
    setInputlist("");
  };
  return (
    <>
      <div className="todo__container">
        <h1 className="todo__title">Todo List</h1>
        <div className="input__container">
          <input
            type="text"
            className="input__search"
            placeholder="Add a item"
            value={inputValue}
            onChange={InputEvent}
          />
          <Button onClick={Listofitem} className="input__button">
            <AddIcon />
          </Button>
        </div>

        <ol>
          {/* <li>{inputValue}</li> */}

          {Items.map((item, index) => {
            return <Mlist item={item} key={index} />;
          })}
        </ol>
      </div>
    </>
  );
};

export default MtodoList;
