import React from "react";
import "../Styles/TodoList.css";

const ListTO = (props) => {
  return (
    <>
      <li
        onClick={() => {
          props.onSelect(props.id);
        }}
      >
        {props.itemValue}
      </li>
    </>
  );
};

export default ListTO;
