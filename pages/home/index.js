import { useState } from 'react';
import Card from '../../components/Card/Card.jsx';
import ScreenSection from '../../components/ScreenComponent/ScreenSection/screensection.js';
// import 'bootstrap/dist/css/bootstrap.css'

export default function Home() {

  let property ={
    style:{"flex-basis":"200px","margin":"10px"}
  }
  return (
    <>
    <ScreenSection title="Home"></ScreenSection>
    <div className='flex justify-center flex-wrap-wrap' >
     <Card property={property}>
       <div id="header" className="f-2 green">Today Buy</div>
       <div id="body">10,000 Rs</div>
     </Card>
     <Card property={property}>
       <div id="header" className="f-2 red">Today Sell</div>
       <div id="body">10,000 Rs</div>
     </Card>
    </div>
    </>
  )
}
