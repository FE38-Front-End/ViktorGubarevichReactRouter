import React, { useState } from "react";
import "./App.scss";
import Fieldset from "./Fieldset";

function Converter() {
  const rate = 2.6;

  const [valueUSD, setValueUSD] = useState("");
  const [valueBYN, setValueBYN] = useState("");

  const toBYN = (USD) => {
    setValueBYN(Math.round(USD * rate * 100) / 100);
    setValueUSD(USD);
  };

  const toUSD = (BYN) => {
    setValueUSD(Math.round((BYN / rate) * 100) / 100);
    setValueBYN(BYN);
  };

  return (
    <form className="app">
      <h2> Live currency converter </h2>
      <Fieldset
        legend="$, USD"
        currency="USD"
        value={valueUSD}
        onChange={toBYN}
      />
      <Fieldset legend="BYN" currency="BYN" value={valueBYN} onChange={toUSD} />
    </form>
  );
}

export default Converter;
