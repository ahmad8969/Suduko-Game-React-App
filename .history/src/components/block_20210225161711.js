import React, {useState} from 'react';
import './block.css'

const Block = (props) =>{

    let[value, setValue]= useState(props.number);
   
    const changeState = () =>{ 
        alert('working')
    }
  
   
   
   
   
    return (
        <div className="button_block">
            <button onClick={changeState}>{value}</button>
        </div>
    )
}

export default Block;