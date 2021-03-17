import React  from 'react';   //{useState}  
import './App.css';
import Block from './components/block'
import NineBlock from './components/nineBlockComponent';
 

function Board () {
  const nine_block_Element_into_Nine = [1,2,3,4,5,6,7,8,9];
  const single_block_Into_Nine = [1,2,3,4,5,6,7,8,9];
    
  const Click = (idOfSpecificButton,i,j,e) =>{
    console.log(e.target.value)
    document.getElementById(idOfSpecificButton).style.color="green"
    XaxisSelection(i);
    YaxisSelection(j);
    DiagonalSelectionUpward(idOfSpecificButton);
    DiagonalSelectionDownward(idOfSpecificButton);
    DiagonalSelectionDownwardLeftDown(idOfSpecificButton);
    DiagonalSelectionUpwardLeftUp(idOfSpecificButton);
  }
  const XaxisSelection = (i)=>{
    for(let xAxis= 0; xAxis<=8; xAxis++){
      let creatId= i+ xAxis;
      document.getElementById(creatId).style.color="green"
    }
  }

  const YaxisSelection = (i)=> {
    for(let xAxis1= 0; xAxis1<=8; xAxis1++){
      let creatId=  xAxis1 +i;
      
      document.getElementById(creatId).style.color="yellow"
    }
  }

  const DiagonalSelectionUpward = (selectedId)=>{
  let array_of_length= nine_block_Element_into_Nine.length;
  console.log(array_of_length);
  console.log(typeof(array_of_length));
  let get_the_id_of_current_box= parseInt(selectedId);
  console.log(get_the_id_of_current_box); 
    for(let hello=get_the_id_of_current_box; hello>=0; hello-=array_of_length){
      if(hello<=9){
        var concatination = 0+`${hello}`;
        document.getElementById(concatination).style.color="red";
      } else if(hello==19 || hello==29 || hello==39 || hello==49 || hello==59 || hello==69 || hello==79){
        return;
      }
      else{
        document.getElementById(hello).style.color="red";
      }
      
    }
  }
        const DiagonalSelectionUpwardLeftUp = (selectedId)=>{
          let array_of_length= 2 + nine_block_Element_into_Nine.length;
          console.log(array_of_length);
          console.log(typeof(array_of_length));
          let get_the_id_of_current_box= parseInt(selectedId);
          console.log(get_the_id_of_current_box); 
            for(let hello=get_the_id_of_current_box; hello>=0; hello-=array_of_length){
              if(hello<=9){
                var concatination = 0+`${hello}`;
                document.getElementById(concatination).style.color="indigo";
                return;
                
              } else if( hello==9 || hello==19 || hello==29 || hello==39 || hello==49 || hello==59 || hello==69 || hello==79){
                return;
              }
              else{
                document.getElementById(hello).style.color="indigo";
              }
              
            }
          }


        const DiagonalSelectionDownward= (selectedId)=>{
          let array_of_length= nine_block_Element_into_Nine.length;
          console.log(array_of_length);
          console.log(typeof(array_of_length));
          let get_the_id_of_current_box= parseInt(selectedId);
          console.log(get_the_id_of_current_box); 
    for(let hello=get_the_id_of_current_box; hello<=88; hello+=array_of_length){
      if(hello==0){
        return;
      }
      else if(hello<=9){
        var concatination = 0+`${hello}`;
        document.getElementById(concatination).style.color="pink";
      } else if(hello==19 || hello==29 || hello==39 || hello==49 || hello==59 || hello==69 || hello==79){
        return;
      }
      else{
        document.getElementById(hello).style.color="pink";
      }
      
    }
        }
        const DiagonalSelectionDownwardLeftDown= (selectedId)=>{
          let array_of_length= 2 +  nine_block_Element_into_Nine.length;
  console.log(array_of_length);
  console.log(typeof(array_of_length));
  let get_the_id_of_current_box= parseInt(selectedId);
  console.log(get_the_id_of_current_box); 
    for(let hello=get_the_id_of_current_box; hello<=88; hello+=array_of_length){
      if(hello==0){
        return;
      }
      else if(hello<=9){
        var concatination = 0+`${hello}`;
        document.getElementById(concatination).style.backgroundColor="blue";
      } else if(hello==19 || hello==29 || hello==39 || hello==49 || hello==59 || hello==69 || hello==79){
        return;
      }
      else{
        document.getElementById(hello).style.backgroundColor="blue";
      }
      
    }
        }
        const gettingRandomNumber = () => {
          let random = Math.floor(Math.random() * (65 - 90)) + 90;
          const character = String.fromCharCode(random);
          return character;
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
          
          
          <Block rowId={i} value={gettingRandomNumber()} click={(e)=>{Click(`${i}${j}`,`${i}`,`${j}`,e)}} colId={j} keys={`${i}${j}`}></Block>
          
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
