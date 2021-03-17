import React, {useState} from 'react';
import './App.css';
import Block from './components/block'
import NineBlock from './components/nineBlockComponent';
 

function Board () {
  const nine_block_Element_into_Nine = [1,2,3,4,5,6,7,8,9];
  const single_block_Into_Nine = [1,2,3,4,5,6,7,8,9];
    
  const Click = (idOfSpecificButton,i,j) =>{
    document.getElementById(idOfSpecificButton).style.color="green"
    XaxisSelection(j)
    // console.log(i);
    // alert(e.i,e.j)
  }
  const XaxisSelection = (i)=>{
    for(let xAxis= 0; xAxis<=8; xAxis++){
      let creatId= i+ xAxis;
      console.log(creatId)
      // document.getElementById(creatId).style.color="green"
    }
  }
  
  
  return (
    
    <div className="App">
    <h1>SUDUKO GAME </h1>
    <div className="board_nine_block_Style">
    {nine_block_Element_into_Nine.map((s,i)=>{
      return(
      <div>
      <NineBlock id={i}>
        {single_block_Into_Nine.map((s,j)=>
        
          <Block rowId={i} click={(e)=>{Click(`${i}${j}`,`${i}`,`${j}`)}} colId={j} keys={`${i}${j}`}></Block>
          
        )}

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
