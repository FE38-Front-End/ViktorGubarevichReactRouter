import React from "react";

function Plus(props) {
  return (
    <div className="btn">
      <button className="button-plus" onClick={props.changeCounter}>
        <img className="img-plus" src={props.plus} alt="plus" />
      </button>
    </div>
  );
}

export default Plus;
