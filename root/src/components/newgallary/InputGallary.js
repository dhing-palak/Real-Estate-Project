import React from "react";

function InputGallary(props) {
  return (
    <div>
      <input
        type={props.type}
        name={props.name}
        id={props.id}
        placeholder={props.placeholder}
      ></input>
    </div>
  );
}

export default InputGallary;
