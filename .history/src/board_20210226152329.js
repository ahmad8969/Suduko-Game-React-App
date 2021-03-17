import React, {useState} from 'react';
import './App.css';
import Block from './components/block'
import NineBlock from './components/nineBlockComponent';
 

function Board () {
  const nine_block_Element_into_Nine = [1,2,3,4,5,6,7,8,9];
    
  const check = function(){
    var pro = prompt("Enter", "Please");
    // setNumber(pro);
    console.log(pro);
    
  }
  // const check = function(s,i){
  //   console.log( i)
  // }
  
  return (
    
    <div className="App">
    <h1>SUDUKO GAME </h1>
    <div className="board_nine_block_Style">
    {nine_block_Element_into_Nine.map((s,i)=>{
      return(
      <div>
      <NineBlock key={i}>
      
      </NineBlock>
      </div>
      )
    })  
    }
    </div>      
    </div>
  );
}

export default Board;
