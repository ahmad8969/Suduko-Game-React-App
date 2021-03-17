import React from 'react';
// import Block from './block'
import './block.css'

const NineBlockBox = (props) =>{
    
    return (
        <div className="nine_block_Style">
            {props.children}
        </div>
    )
}
export default NineBlockBox;




// {single_block_Into_Nine.map((s,i)=>{
//     let random = Math.floor(Math.random() * (49 - 57)) + 57;
//     const character = String.fromCharCode(random);      
    
//   return(
//     <div>
//       {/* <Block keyId={i} boardId={props.id}  number={character}/> */}
//       {props.children}
//       </div>
//   )
//   })}
