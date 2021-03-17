import React, {useState} from 'react';

import './block.css';


const Block = (props)=>{
    var uniqueId = `${props.rowId}`+ `${props.colId}` ;
    const[isClicked, setIsClicked]= useState(false);

    const changeState = (e) => {
        props.click();
        setIsClicked(!isClicked);
        

    }
    if(isClicked){
        return <input type="text"/>;
    }

return(
    <div className="button_block">
    <button id={props.keys} onClick={(e)=>{changeState(e);}} value={props.value}> {props.value}</button>
    </div>
    
)
}

export default Block;