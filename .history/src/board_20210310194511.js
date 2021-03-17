import React, { useState}  from 'react';   //{useState}  
import './App.css';
import Block from './components/block'
import NineBlock from './components/nineBlockComponent';
 
// function useForceUpdate(){
//   const [counter,setCounter]= useState(0);
//   return setCounter(counter+1);

  
// }
function Board () {
  const xAxis_Selection_Array=   [];
  const yAxis_Selection_Array=   [];
  const DiagonalSelectionUpward_Selection_Array= [];
  const DiagonalSelectionUpwardLeftUp_selection_Array= [];
  const DiagonalSelectionDownward_selection_Array= [];
  const DiagonalSelectionDownwardLeftDown_selection_Array= [];
  const complete_blocks_Array = [];

  const nine_block_Element_into_Nine = [0,1,2,3,4,5,6,7,8];
  const single_block_Into_Nine = [0,1,2,3,4,5,6,7,8];

  const [counter2,setCounter2]= useState(1);
  const [getting_current_id, setGetting_current_id]=useState();
  const [Iid, setIid]=useState();
  const [Jid, setJid]=useState();
  // const [isClicked,  setIsClicked]= useState(false);
    
  
  
  
  const Click = (idOfSpecificButton,i,j,e) =>{
    
    setGetting_current_id(idOfSpecificButton);
    setIid(i); 
    setJid(j);
    console.log(Iid,Jid,getting_current_id);
  }
  
  const XaxisSelection = (i)=>{
    for(let xAxis= 0; xAxis<=8; xAxis++){
      let creatId= i+ xAxis;
      document.getElementById(creatId).style.backgroundColor="indigo";
      xAxis_Selection_Array.push(creatId);
    }
    console.log(xAxis_Selection_Array);
  }

  const YaxisSelection = (i)=> {
    for(let xAxis1= 0; xAxis1<=8; xAxis1++){
      let creatId=  xAxis1 +i;
      document.getElementById(creatId).style.backgroundColor="indigo";
      yAxis_Selection_Array.push(creatId);
    }
    console.log(yAxis_Selection_Array);
  }

  const DiagonalSelectionUpward = (selectedId)=>{
  let array_of_length= nine_block_Element_into_Nine.length;
  console.log(array_of_length);
  console.log(typeof(array_of_length));
  let get_the_id_of_current_box= parseInt(selectedId);
  console.log(get_the_id_of_current_box); 
    for(let hello=get_the_id_of_current_box; hello>=0; hello-=array_of_length){
      if(hello<=9){
        if(hello==9){
          return;
        }else{
        var concatination = 0+`${hello}`;
        document.getElementById(concatination).style.backgroundColor="indigo";
        DiagonalSelectionUpward_Selection_Array.push(concatination);
      }
      } else if(hello==19 || hello==29 || hello==39 || hello==49 || hello==59 || hello==69 || hello==79){
        return;
      }
      else{
        document.getElementById(hello).style.backgroundColor="indigo";
        DiagonalSelectionUpward_Selection_Array.push(hello);

      }
      
    }
    console.log(DiagonalSelectionUpward_Selection_Array)
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
                document.getElementById(concatination).style.backgroundColor="indigo";
                DiagonalSelectionUpwardLeftUp_selection_Array.push(concatination);
                return;
                
              } else if( hello==9 || hello==19 || hello==29 || hello==39 || hello==49 || hello==59 || hello==69 || hello==79){
                return;
              }
              else{
                document.getElementById(hello).style.backgroundColor="indigo";
                DiagonalSelectionUpwardLeftUp_selection_Array.push(hello);
              }
              console.log(DiagonalSelectionUpwardLeftUp_selection_Array);  
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
        document.getElementById(concatination).style.backgroundColor="indigo";
        DiagonalSelectionDownward_selection_Array.push(concatination);
      } else if(hello==19 || hello==29 || hello==39 || hello==49 || hello==59 || hello==69 || hello==79){
        return;
      }
      else{
        document.getElementById(hello).style.backgroundColor="indigo";
        DiagonalSelectionDownward_selection_Array.push(hello);
      }
      
      
    }console.log(DiagonalSelectionDownward_selection_Array)
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
        document.getElementById(concatination).style.backgroundColor="indigo";
        DiagonalSelectionDownwardLeftDown_selection_Array.push(concatination);
      } else if( hello==19 || hello==29 || hello==39 || hello==49 || hello==59 || hello==69 || hello==79){
        return;
      }
      else{
        document.getElementById(hello).style.backgroundColor="indigo";
        DiagonalSelectionDownwardLeftDown_selection_Array.push(hello);
      }
      
    }console.log(DiagonalSelectionDownwardLeftDown_selection_Array);
        }
        const gettingRandomNumber = () => {
          let random = Math.floor(Math.random() * (65 - 90)) + 90;
          const character = String.fromCharCode(random);
          return character;
        }
        const complete_selection_array = [...xAxis_Selection_Array,
          ...yAxis_Selection_Array,
          ...DiagonalSelectionUpward_Selection_Array,
          ...DiagonalSelectionUpwardLeftUp_selection_Array,
          ...DiagonalSelectionDownward_selection_Array,
          ...DiagonalSelectionDownwardLeftDown_selection_Array
        ];
        const creatingReadOnlyBlock = () => {
          nine_block_Element_into_Nine.map((val)=>{
            single_block_Into_Nine.map((valu)=>{
              let valueOfId= `${val}${valu}`;  
              complete_blocks_Array.push(valueOfId);
            })
          })
        }
       
        const filter_two_arrays= (selectedId,completeArrayId)=> {
         
          // const removeCommon = (selectedId, completeArrayId) => {
            const spreaded = [...selectedId, ...completeArrayId];
            return spreaded.filter(el => {
               return !(selectedId.includes(el) && completeArrayId.includes(el));
            })
        //  };


          // array1 = complete_blocks_Array.filter(function(item) {
          //   return !complete_selection_array.includes(item); 
          // });
          // console.log(array1);
          
        //   let outerLoop = 0, innerLoop =0;
        //   for(outerLoop=0; outerLoop <= complete_selection_array.length; outerLoop++) {
        //     for(innerLoop=0; innerLoop <= complete_blocks_Array.length; innerLoop++) {
        //         if(complete_selection_array[outerLoop] ==  complete_blocks_Array[innerLoop]){
        //           outerLoop++;
        //           console.log(outerLoop++)
        //           console.log('a')
        //         }
        //     }
        //   }
        }
       
        const changeStateHandler = (getting_current_id,Iid,Jid) => {
          document.getElementById(getting_current_id).style.color="green";
          XaxisSelection(Iid);
          YaxisSelection(Jid);
          DiagonalSelectionUpward(getting_current_id);
          DiagonalSelectionDownward(getting_current_id);
          DiagonalSelectionDownwardLeftDown(getting_current_id);
          DiagonalSelectionUpwardLeftUp(getting_current_id);
          
        } 
         if(Iid && Jid && getting_current_id !=null){
          
          changeStateHandler(getting_current_id,Iid,Jid);
          creatingReadOnlyBlock();
          filter_two_arrays(complete_selection_array,complete_blocks_Array);
          
          
        } 
        
        
        // console.log(complete_selection_array);

       
        
        // console.log(complete_blocks_Array);

        
        
  
  return (
    
    <div className="App">
    <h1>SUDUKO GAME </h1>
    <div className="board_nine_block_Style">
    {nine_block_Element_into_Nine.map((s,i)=>{
      return(
      <div>
      
      <NineBlock id={i}>
        {single_block_Into_Nine.map((s,j)=>
          
          
          <Block  rowId={i} value={gettingRandomNumber()} click={(e)=>{Click(`${i}${j}`,`${i}`,`${j}`,e)}} colId={j} keys={`${i}${j}`}></Block>
          
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
