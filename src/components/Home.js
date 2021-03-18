import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="applications">
      <div className="applications-title">Applications</div>
      <div className="applications-title-item">
        <Link
          className="applications-title-item-type applications-title-item-type__counter"
          to="/counter"
        >
          Counter
        </Link>
        <Link
          className="applications-title-item-type applications-title-item-type__converter"
          to="/converter"
        >
          Converter
        </Link>
      </div>
    </div>
  );
}

export default Home;
