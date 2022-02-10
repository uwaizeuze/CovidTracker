import React, { useState } from "react";
import "../Styles/TodoList.css";
import ListTO from "./ListTO";

const TodoList = () => {
  const [inputlist, setInputlist] = useState("");
  const [items, setItems] = useState([]);
  const InputEvent = (event) => {
    setInputlist(event.target.value);
  };

  const ListofItem = () => {
    setItems((oldItem) => {
      return [...oldItem, inputlist];
    });
    setInputlist("");
  };
  const DeleteItem = (id) => {
    setItems((oldItem) => {
      return oldItem.filter((arr, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <div className="todo__container">
        <h1 className="todo__title">Todo list</h1>

        <div className="input__container">
          <input
            type="text"
            className="input__search"
            placeholder="Add a item"
            value={inputlist}
            onChange={InputEvent}
          />
          <button onClick={ListofItem} className="input__button">
            +
          </button>
        </div>
        <ol>
          {/* <li>{inputlist}</li> */}
          {items.map((itemValue, index) => {
            // return <li key={index}>{itemValue}</li>;
            return (
              <>
                <ListTO
                  itemValue={itemValue}
                  key={index}
                  id={index}
                  onSelect={DeleteItem}
                />
              </>
            );
          })}
        </ol>
      </div>
    </>
  );
};

export default TodoList;
