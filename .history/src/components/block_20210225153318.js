import React from 'react';
import './block.css'

const Block = (props) =>{
   
    let checkrandom = function (){
        let i=null;
        for (i=0; i<=9; i++){
            
           console.log( Math.floor(Math.random() * 100));

        }
    }
    checkrandom();
  
   
   
   
   
    return (
        <div className="button_block">
            <button onClick={props.click}>{props.number}</button>
        </div>
    )
}

export default Block;