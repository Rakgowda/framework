import React, { useState,useEffect,useLayoutEffect } from 'react';
import NavStyle from "./Nav.module.scss";
import { useRouter } from 'next/router'
const Nav = (props) => {
    const router = useRouter();
    const [selectedNav, setSelectedNav] = useState("");

    useLayoutEffect(() => {
        let currentPath =router.pathname.replace(/\//g,"") 
        if(currentPath =="") currentPath="home"
        setSelectedNav(currentPath)
    }, [])
    
    function onNavClickHandler(event){
        let id = event.target.id;
        if(id=="") return ;
        setSelectedNav(id);
        router.push("/"+id)
    }
    function setAttribute(id)
    {
        return {id:id,className:selectedNav == id?NavStyle.selectedNav:""}
    }
    return ( 
    <div className='flex relative'>
        <div onClick={onNavClickHandler} style={{"flex-basis":"110px",height:"100vh"}} className={`${'flex-column justify-center pos-sticky top-0'} ${NavStyle.nav}`}>
            <div {...setAttribute("home")}>Home</div>
            <div {...setAttribute("buy")}>Buy</div>
            <div {...setAttribute("sell")}>Sell</div>
            <div {...setAttribute("items")}>Item</div>
            <div {...setAttribute("report")}>Report</div>
        </div>
        <div className='flex-grow-1' >
            <div className='flex-column'>
            <div className='flex' style={{height:"50px"}}>
                <div className='flex-grow-1 '>Ventakeshwara trader</div>
                <div className='mr-10'>Rakshith</div>
                <div>LogOut</div>
            </div>
            <div className='pos-relavtive' width={"100%"}>{props.children}</div>
            </div>
        </div>
    </div> 
    );
}
 
export default Nav;