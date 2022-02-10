import React, { useState } from "react";
import "../Styles/IncDec.css";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";

const INcDec = () => {
  const [num, setNum] = useState(0);
  const IncNum = () => {
    setNum(num + 1);
  };

  const DecNum = () => {
    if (num > 0) {
      setNum(num - 1);
    } else {
      alert("you are exceeding Limits!!");
      setNum(0);
    }
  };
  return (
    <>
      <div className="incDec__container">
        <h1 className="incDec__title">{num}</h1>
        <div className="btn__box">
          <Tooltip title="Add">
            <Button onClick={IncNum} className="btn__inc">
              <AddIcon />
            </Button>
          </Tooltip>

          <Tooltip title="Delete">
            <Button onClick={DecNum} className="btn__dec">
              <DeleteIcon />
            </Button>
          </Tooltip>
        </div>
      </div>
    </>
  );
};

export default INcDec;
