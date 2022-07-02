import Button from "../components/Button/Button.js"
import Input from '../components/Input/Input'
import Label from '../components/Label/Label'
import { useState } from 'react';
import DropDown from '../components/DropDown/DropDown';
import Card from '../components/Card/Card';
// import 'bootstrap/dist/css/bootstrap.css'

export default function Home() {

  let property ={
    style:{"width":"250px","margin":"10px"}
  }
  return (
    <div style={{display: "flex","justify-content": "center"}}>
     <Card property={property}>
       <div id="header" className="f-2 buy">Today Buy</div>
       <div id="body">10,000 Rs</div>
     </Card>
     <Card property={property}>
       <div id="header" className="f-2 sell">Today Sell</div>
       <div id="body">10,000 Rs</div>
     </Card>
    </div>
  )
}
