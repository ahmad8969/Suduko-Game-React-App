import React, {useState} from 'react';
import './block.css'

const Block = (props) =>{

    let[value, setValue]= useState(props.number);
   
    // let checkrandom = function (){
    //     let i=null;
    //     for (i=0; i<=9; i++){
            
           

    //     }
    // }
    // checkrandom();
  
   
   
   
   
    return (
        <div className="button_block">
            <button onClick={props.click}>{value}</button>
        </div>
    )
}

export default Block;