import React, {useState} from 'react';
import {Click} from '.././board.js';
import './block.css';


const Block = (props)=>{
    var uniqueId = `${props.rowId}`+ `${props.colId}` ;
    const[isClicked, setIsClicked]= useState(false);

    const changeState = (e) => {
        console.log(e);
        Click();
        

    }

return(
    <div className="button_block">
    <button id={props.keys} onClick={(e)=>{changeState(e) {props.click};}} value={props.value}> {props.value}</button>
    </div>
    
)
}

export default Block;