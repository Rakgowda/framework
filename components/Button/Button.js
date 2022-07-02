import React, { Component } from 'react';
import buttonStyle from "./Button.module.scss"
const Button=(props)=>{
    let classType = {
        "primary":buttonStyle.primarybuttonStyle,
        "secondary":buttonStyle.secondarybuttonStyle,
    }
    let eventHandler = !(props.disabled) && props.eventHandler
    return (
      <button
        className={`${buttonStyle.buttonDefaultStyle} ${
          classType?.[props.type]
        } ${props.className} ${
          props.disabled && buttonStyle.buttonDisableStyle
        }`}
        style={props.style}
        {...eventHandler}
        {...props.property}
      >
        {props.children}
      </button>
    );
}

export default Button;