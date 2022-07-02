import React, { Component } from 'react';
import DropDown from '../../DropDown/DropDown';
const ScreenSection = (props) => {
    return ( 
        <>
        <div className='flex justify-space-between mb-10 align-item-end'>
        {props.title && <div className='b f-2'>{props.title}</div>}
        {props.process && 
        <DropDown placeholder="Processor" eventHandler={props.process.eventHandlers} showPlaceHolder={true} options={props.process.options}></DropDown>
        }
        </div>
        
        </>
     );
}
 
export default ScreenSection;