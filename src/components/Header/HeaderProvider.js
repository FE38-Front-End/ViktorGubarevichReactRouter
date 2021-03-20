import React from "react";
import Header from "./Header";

function HeaderProvider(props) {
  return (
    <React.Fragment>
      <Header />
      {props.children}
    </React.Fragment>
  );
}

export default HeaderProvider;
