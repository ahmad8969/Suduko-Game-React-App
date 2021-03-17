import React, {useState} from 'react';
import './block.css'


const Block = (props)=>{
    var uniqueId = `${props.boardId}`+ `${props.keyId}` ;
return(
    <button>{uniqueId}</button>
)
}

export default Block;