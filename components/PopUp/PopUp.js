import React, { useState,useImperativeHandle,forwardRef } from 'react';
import Card from '../Card/Card';
const PopUp = forwardRef((props,ref) => {
    const [visibility, setVisibility] = useState(false);

    function handleVisibility(){
        setVisibility(!visibility)
    }

     // The component instance will be extended
  // with whatever you return from the callback passed
  // as the second argument
  useImperativeHandle(ref, () => ({
      handleVisibility()
      {
        handleVisibility()
      }
    }));
    return ( 
        <div style={{transform:"translate(-50%, -50%)"}} className={`${"z-1 background-white pos-absolute top-per-5 left-per-5"} ${(visibility == false)?"display-none":""}`}>
            <Card style={props.style}>
            <div id="headerAction">  
                <img onClick={handleVisibility} src='./svg/close.svg' width="15" height="15"></img>                  
                </div>
                {props.title && <div id="header">{props.title}</div>}
                <div id="body">{props.children}</div>
            </Card>
        </div>
     );
});
 
export default PopUp;