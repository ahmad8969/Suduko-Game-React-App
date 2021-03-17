import React, {useState} from 'react';
import './block.css'

const Block = (props) =>{

    let[value, setValue]= useState(props.number);
   
    const changeState = () =>{ 
        let getting_new_value = prompt('enter New Value:', 'enter digit' );
        setValue(getValue);
    }
  
   
   
   
   
    return (
        <div className="button_block">
            <button onClick={changeState}>{value}</button>
        </div>
    )
}

export default Block;