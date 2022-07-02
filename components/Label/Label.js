import React, { Component } from 'react';
import labelStyle from "./Label.module.scss"

const Label = (props) => {
    let className ={
        "primary":labelStyle.primary,
        "secondary":labelStyle.secondary
    }
    return (
      <>
        <label
          className={`${className[props.type || "primary"]}`}
          {...props.eventHandler}
          style={props.style}
          {...props.property}
        >
          {props.children}
        </label>
      </>
    );
}
 
export default Label;