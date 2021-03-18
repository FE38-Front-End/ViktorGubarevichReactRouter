import React, { useState } from "react";
import "./App.scss";
import Plus from "./Plus";
import Update from "./Update";
import Minus from "./Minus";
import plus from "./images/plus.png";
import update from "./images/update.png";
import minus from "./images/minus.png";

function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="main">
      <div className="app">
        <div className="count"> {counter} </div>
        <div className="buttons">
          <Plus changeCounter={() => setCounter(counter + 1)} plus={plus} />
          <Update changeCounter={() => setCounter(0)} update={update} />
          <Minus changeCounter={() => setCounter(counter - 1)} minus={minus} />
        </div>
      </div>
    </div>
  );
}

export default Counter;
