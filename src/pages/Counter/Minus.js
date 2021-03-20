import React from "react";

function Minus(props) {
  return (
    <div className="btn">
      <button className="button-minus" onClick={props.changeCounter}>
        <img className="img-minus" src={props.minus} alt="minus" />
      </button>
    </div>
  );
}

export default Minus;
