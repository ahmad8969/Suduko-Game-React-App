import React from 'react';
import './block.css'


const Block = (props)=>{
    var uniqueId = `${props.rowId}`+ `${props.colId}` ;
return(
    <div className="button_block">
    <button id={props.keys} onClick={props.click} value={props.value}> {uniqueId}</button>
    </div>
    
)
}

export default Block;