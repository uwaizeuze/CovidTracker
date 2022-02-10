import React from "react";
import "../Styles/Note.css";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";

const Note = (props) => {
  const DeleteIt = () => {
    props.deleteitem(props.id);
  };
  return (
    <>
      <div className="note__container">
        <div className="note__main">
          <h1 className="note__title">{props.title}</h1>
          <p className="note__description">{props.content}</p>
        </div>
        <div className="note__btn">
          <Button onClick={DeleteIt} className="note__button">
            <DeleteIcon className="note__button" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Note;
