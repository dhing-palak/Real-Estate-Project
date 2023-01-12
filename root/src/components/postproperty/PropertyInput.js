import React from "react";
import "../../styles/Postproperty.css";

export function PropertyInput(props) {
  return (
    <div className={props.className}>
      <input
        className="postproperty-input"
        type={props.type}
        name={props.name}
        id={props.id}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      ></input>
      <span className="asterisk_input"></span>
      <span className="postproperty-error-data">{props.formErrors}</span>
    </div>
  );
}

export default PropertyInput;
