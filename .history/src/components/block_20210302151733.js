import React, {useState} from 'react';
import './block.css'


const Block = (props)=>{
    var uniqueId = `${props.boardId}`+ `${props.keyId}` ;
return(
    <div className="button_block">
    <button>{uniqueId}</button>
    </div>
    
)
}

export default Block;