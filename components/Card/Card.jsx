import React, { Component } from "react";
import _ from "lodash";
const Card = (props) => {
  let childrens = _.isArray(props.children);
  let headerChild = getChild("header", childrens);
  let bodyChild = getChild("body", childrens);
  let footerChild = getChild("footer", childrens);
  let headerAction = getChild("headerAction", childrens);
  let eventHandler = !props.disabled && props.eventHandler;

  function getChild(id, isArray) {
    if (isArray) {
      return props.children.filter((e) => e.props.id == id);
    } else if (id == props.children.props.id) {
      let child = [];
      child.push(props.children);
      return child;
    } else {
      return [];
    }
  }
  return (
    <div
      className={`${"box-shadow-default border-primary border-width-2 background-secondary text-center f-1 "} ${props.className} ${"pos-relative"}`}
      style={props.style}
      {...props.property}
      {...eventHandler}
    >
      {headerAction.length == 1 && (
        <div className="pos-absolute right-5">{headerAction}</div>
      )}
      {headerChild.length == 1 && (
        <div className={"b f-1 primary"}>{headerChild}</div>
      )}
      {bodyChild.length == 1 && (
        <div className={"p-rem-1 primary"}>{bodyChild}</div>
      )}
      {footerChild.length == 1 && (
        <div className={''}>{footerChild}</div>
      )}
    </div>
  );
};

export default Card;
