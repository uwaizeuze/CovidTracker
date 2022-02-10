import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import "../Styles/TodoList.css";

const Mlist = (props) => {
  const [value, setValue] = useState(false);
  const DeleteItem = () => {
    setValue(true);
  };
  return (
    <>
      <div
        className="Mlist"
        style={{ textDecoration: value ? "line-through" : "none" }}
      >
        <span className="Mlist__span">
          <DeleteIcon onClick={DeleteItem} />
        </span>
        <li className="Mlist__li">{props.item} </li>;
      </div>
    </>
  );
};

export default Mlist;
