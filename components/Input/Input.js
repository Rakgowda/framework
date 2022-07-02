import React, { Component } from 'react';
import inputStyle from "./Input.module.scss"
const Input = (props) => {
    let eventHandler = !(props.disabled) && props.eventHandler

    return (
      <>
        <input
          type={props.type || "text"}
          className={`${inputStyle.buttonDefaultStyle} ${props.className}`}
          {...props.eventHandler}
          value={props.value}
          style={props.style}
          {...props.property}
          placeholder={props.placeholder || ""}
          ref={props.refProp}
          autoFocus={props.autofocus }
        ></input>
      </>
    );
}
 
export default Input;