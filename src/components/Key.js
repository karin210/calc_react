import React from "react";
import "./Styles/Keys.css";

function Key(props) {
  return (
    <button
      className={`${props.class} key`}
      onClick={props.keySign === "=" ? props.handleTotal : props.handleClick}
      id="key"
    >
      {props.keySign}
    </button>
  );
}
export default Key;
