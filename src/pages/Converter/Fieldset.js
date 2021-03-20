import React from "react";
import "./Fieldset.scss";

function Fieldset(props) {
  const inputChange = (event) => props.onChange(event.target.value);
  const value = props.value;
  const currency = props.currency;
  return (
    <fieldset className="app-exchanger">
      <legend className="legend"> Enter currency in {props.legend} </legend>
      <label for={currency}> {currency} </label>
      <input
        id={currency}
        type="number"
        value={value}
        onChange={inputChange}
      ></input>
    </fieldset>
  );
}

export default Fieldset;
