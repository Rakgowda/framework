import React, { useState } from 'react';
import DropDownStyle from "./DropDown.module.scss"
import Cbutton from "../Button/Button"
const DropDown = (props) => {
    let eventHandlers = !(props.disabled) && props.eventHandler;
    console.log("🚀 ~ file: DropDown.jsx ~ line 6 ~ DropDown ~ eventHandlers", eventHandlers)
    const [optionVisible, setOptionVisible] = useState(false)
    const [selectedItem, setSelectedItem] = useState(getDefaultValue())

    function getDefaultValue(){
        let value = props.placeholder || "Select"
        if (props.default == undefined ) return value;
        for (let index = 0; index < props.options.length; index++) {
            if(props.options[index] == props.default)
            {
                value = props.default;
                break;
            }
        }


        return value;
    }
    function onClickDoprDown()
    {
        if(props.disabled == true) return;
        setOptionVisible(!optionVisible)
    }
    function onOptionClick(e)
    {
        if(!props.showPlaceHolder)
        {
            setSelectedItem(e.target.textContent)
        }
        onClickDoprDown()
        if(eventHandlers[e.target.textContent] != undefined)
        {
            eventHandlers[e.target.textContent]()
        }
    }
    return ( 

        <div>
        <div title={selectedItem} className={`${props.disabled && DropDownStyle.disabled} ${DropDownStyle.default}`}  onClick={onClickDoprDown}>
        <div className='text-wrap' title={selectedItem}>{selectedItem}</div>
        <div>

        <span ><img className={`${DropDownStyle.arrow} ${optionVisible?"rotate-180":""}`} src="./svg/dropdown.svg"></img></span>
             
        </div>
        </div>
        { optionVisible && <div className={DropDownStyle.itemList}>
            <div className={DropDownStyle.item}>
        {props.options.map(e=>{
                return <div className='text-wrap' title={e} onClick={onOptionClick} key={e} id={e} selected={props.default == e && true}>{e}</div>
            })}
            </div>
        </div>}
        
        </div>

     );
}
 
export default DropDown;