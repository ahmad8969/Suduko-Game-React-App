import React, {useState} from 'react';
import './App.css';
import Block from './components/block'
import NineBlock from './components/nineBlockComponent';
 

function Board () {
  const nine_block_Element_into_Nine = [1,2,3,4,5,6,7,8,9];
  const single_block_Into_Nine = [1,2,3,4,5,6,7,8,9];
    
  const Click = (idOfSpecificButton,i,j) =>{
    document.getElementById(idOfSpecificButton).style.color="green"
    XaxisSelection(i);
    Yaxis(j);
    DiagonalSelection(idOfSpecificButton);

    // console.log(i);
    // alert(e.i,e.j)
  }
  const XaxisSelection = (i)=>{
    for(let xAxis= 0; xAxis<=8; xAxis++){
      let creatId= i+ xAxis;
      
      document.getElementById(creatId).style.color="green"
    }
  }
  const Yaxis = (i)=> {
    for(let xAxis1= 0; xAxis1<=8; xAxis1++){
      let creatId=  xAxis1 +i;
      
      document.getElementById(creatId).style.color="green"
    }
  }

  const DiagonalSelection = (idForDiagonal)=>{
        let arrayIndexCount= single_block_Into_Nine.length;
        let forString_to_number_conversion = parseInt(idForDiagonal);
        console.log(forString_to_number_conversion);
        for(let i=forString_to_number_conversion; i<=0; i-=arrayIndexCount){
          console.log(i);
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

  // console.log(j)
    
    // let diagonalArrayOfI = [];
    // let diagonalArrayOfJ=[];

    // for(i; i>=0; i--){

    //   diagonalArrayOfI.push(i);
    // }
    // for(j; j<=diagonalArrayOfI.length; ++j){
    //   diagonalArrayOfJ.push(j);
      
    // }
    
    //       diagonalArrayOfJ.map((val,i)=>{
    //         let variable1 = `${diagonalArrayOfI[i]}` + val;
    //         console.log(variable1);
    //         document.getElementById(variable1).style.color="green";
    //       })
    // console.log(diagonalArrayOfI, diagonalArrayOfJ);