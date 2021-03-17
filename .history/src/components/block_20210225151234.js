import React from 'react';
import './block.css'

const Block = (props) =>{
   
   const random = () => {


       for(let i=0; i<=9; i++ ){
        Math.floor(Math.random() * 127);
       }
   }
   console.log(this.random)
   
   
   
   
   
    return (
        <div className="button_block">
            <button onClick={props.click}>{props.number}{props.value}</button>
        </div>
    )
}

export default Block;