import React from 'react';
import './block.css'

const Block = (props) =>{
   
   
    let randon = function (){
        for (let i=0; i<=9; i++ ){
            Math.floor(Math.random()* 10);
        }
    }

   
   
   
   
   
    return (
        <div className="button_block">
            <button onClick={props.click}>{props.number}{props.value}</button>
        </div>
    )
}

export default Block;