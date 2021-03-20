import React from "react";
import { Link } from "react-router-dom";
import { useMouseTracker } from "../../utils/useMouseTracker";

export default function Home() {
  const mouseTracker = useMouseTracker();
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
      <div>
        <h2>
          Положение мыши по координатам: X:{mouseTracker.x} Y:{mouseTracker.y}
        </h2>
      </div>
    </div>
  );
}
