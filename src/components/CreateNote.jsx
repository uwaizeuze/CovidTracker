import React, { useState } from "react";
import "../Styles/CreateNotes.css";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

const CreateNote = (props) => {
  const [expand, setExpand] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const inputEvent = (event) => {
    const { name, value } = event.target;
    setNote((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      };
    });
    console.log(note);
  };
  const Addevent = () => {
    props.passNote(note);
    setNote({
      title: "",
      content: "",
    });
  };

  const ExpandIt = () => {
    setExpand(true);
  };
  const backToNormal = () => {
    setExpand(false);
  };
  return (
    <>
      <div className="createNotes__container">
        <form className="form__container" onDoubleClick={backToNormal}>
          {expand ? (
            <input
              type="text"
              placeholder="Title"
              className="form__input"
              name="title"
              value={note.title}
              onChange={inputEvent}
            />
          ) : null}

          <textarea
            type="text"
            className="form__textarea"
            placeholder="write A note.."
            rows=""
            column=""
            name="content"
            value={note.content}
            onChange={inputEvent}
            onClick={ExpandIt}
          ></textarea>
          {expand ? (
            <Button onClick={Addevent} className="form__button">
              <AddIcon className="form__Addtion" />
            </Button>
          ) : null}
        </form>
      </div>
    </>
  );
};

export default CreateNote;
