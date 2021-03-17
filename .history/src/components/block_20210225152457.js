import React from 'react';
import './block.css'

const Block = (props) =>{
   
   
  
   
   
   
   
    return (
        <div className="button_block">
            <button onClick={props.click}>{props.number}</button>
        </div>
    )
}

export default Block;