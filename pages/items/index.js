import React, { useRef,useState,useEffect } from 'react';
import Card from '../../components/Card/Card';
import Add from "../../public/svg/add.svg"
import DropDown from "../../components/DropDown/DropDown.js"
import PopUp from '../../components/PopUp/PopUp';
import Input from '../../components/Input/Input';
import Label from '../../components/Label/Label';
import Button from '../../components/Button/Button';
import { getAPI } from '../../components/Service/service';
import ScreenSection from '../../components/ScreenComponent/ScreenSection/screensection';

const Items = () => {
    let property ={
        style:{"width":"200px"}
    }
    const itemName = useRef()
    const price = useRef()
    const popAddRef = useRef("popUp");
    const [data, setdata] = useState({});
    const editedItem = useRef([])
    useEffect( () => {
        let itemData =  getAPI('http://localhost:3000/api/items');
        itemData.then(res =>{
            setdata(res)
        })
    }, []);
    let eventHandlers ={
        "add":()=>{
            itemName.current.value=""
            price.current.value=""
            popAddRef.current.handleVisibility();
            itemName.current.focus();
        },
        "save":()=>{
            if(editedItem.current.length == 0) return;
            editedItem.current.map(e=>{
                e.classList.remove("text-editable")
            })
            editedItem.current=[]
        },
        "refresh":()=>{
            editedItem.current.map(e=>{
                e.classList.remove("text-editable")
            })
            editedItem.current=[]
            let itemData =  getAPI('http://localhost:3000/api/items');
            itemData.then(res =>{
                let data = JSON.parse(JSON.stringify(res))
                setdata(data)
            })
        }
    }
    function addHandler(){
        if(itemName.current.value && price.current.value)
        {
            let newData = {...data};
            newData[itemName.current.value] = price.current.value;
            setdata(newData)
        }
        popAddRef.current.handleVisibility()
    }
    let addEvent ={
        onClick:()=>addHandler()
    }
    function getAddItem()
    {
        return (
            <div className='flex flex-center flex-dir-column'>
                <div className='mb-5'>
                    <Label>Item Name</Label>
                    <Input type={"text"} placeholder="Item Name" refProp={itemName} autofocus={true}></Input>
                </div>
                <div className='mb-5'>
                    <Label>Price</Label>    
                    <Input type={"number"} placeholder="Price" refProp={price}></Input>
                </div>
                <div>
                <Button type="primary" eventHandler={addEvent}>Add</Button>
                </div>
        </div>
        )
    }
    function editHandler()
    {
        debugger
        let id = "";
        if(event == undefined || event.target ==undefined || event.target.id =="" || !event.target.id.includes("edit"))
        {
            return;
        }
        id = event.target.id;
        let cardId =event.target.id.replace("edit","")
        let header = document.querySelector("#"+cardId+" div[id='header']")
        let body = document.querySelector("#"+cardId+" div[id='body']")
        let selectedItem =[]
        selectedItem.push(header) 
        selectedItem.push(body) 
        header.classList.add("text-editable");
        body.classList.add("text-editable");
        editedItem.current.push(...selectedItem);

    }
    return ( 
        <>
        <PopUp title="Add Item" ref={popAddRef} style={{width:"250px",height:"200px"}}>
        {getAddItem()}
        </PopUp>
        <ScreenSection title="Items" process={{eventHandlers:eventHandlers,options:['add','save','refresh']}}></ScreenSection>
        <div className='flex justify-center flex-wrap-wrap' onClick={editHandler}>
            {Object.entries(data) && Object.keys(data).map(e=>{
                return (
                    <Card {...property} className={"ml-5 mb-5"} property={{id:e}}>
                        <div id="headerAction"><img id={"edit"+e} width={15} height={15} src="./svg/edit.svg"></img></div>
                        <div id="header" className='f-2'>{e}</div>
                        <div id="body">{data[e]} Rs</div>
                    </Card>
                )
            })}
        </div>
        
        </>
     );
}
 
export default Items;