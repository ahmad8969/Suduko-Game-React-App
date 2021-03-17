import React from 'react';
import './block.css'


const Block = (props)=>{
    var uniqueId = `${props.rowId}`+ `${props.colId}` ;
return(
    <div className="button_block">
    <button id={props.keys} onClick={props.click} value={props.value}> {props.value}</button>
    </div>
    
)
}

export default Block;