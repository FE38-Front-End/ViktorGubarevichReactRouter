import React from "react";

function Update(props) {
  return (
    <div className="btn">
      <button className="button-update" onClick={props.changeCounter}>
        <img className="img-update" src={props.update} alt="update" />
      </button>
    </div>
  );
}

export default Update;
