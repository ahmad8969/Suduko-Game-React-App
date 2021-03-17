import React, {useState} from 'react';
import './block.css'

const Block = (props) =>{

    let[value, setValue]= useState(props.number);
   
    const changeState = () =>{ 
        let getting_new_value = prompt('enter New Value:', 'enter digit' );
        if(getting_new_value <=10){
            setValue(getting_new_value);
        }else{
            alert('enter digits 0-9 please'  +  getting_new_value  +  'is invalid number')
        }
        
        
    }
  
   
   
   
   
    return (
        <div className="button_block">
            <button onClick={changeState}> <span id="valueOfState">{value}</span> </button>
        </div>
    )
}

export default Block;