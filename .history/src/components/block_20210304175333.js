import React, {useState} from 'react';
import './block.css'


const Block = (props)=>{
    var uniqueId = `${props.rowId}`+ `${props.colId}` ;
    const[isClicked, setIsClicked]= useState(false);

    const changeState = () => {
        {props.click}
    }

return(
    <div className="button_block">
    <button id={props.keys} onClick={changeState} value={props.value}> {props.value}</button>
    </div>
    
)
}

export default Block;