import React, {useState} from 'react';
import './block.css'

const Block = (props) =>{

    const [value, setValue]= useState(props.number);
    const [isClicked,  setIsClicked]= useState(false);
    const first_Vertical_Block_Combination = [0,3,6];
    const second_Vertical_Block_Combination = [1,4,7];
    const third_Vertical_Block_Combination = [2,5,8];
   


    var uniqueId = `${props.boardId}`+ `${props.keyId}` ;
    const [pid] = useState(uniqueId) 
    // box_id_selection_x_axis= []
    let checkId = (e)=>{
        console.log(e.target.id)
        for(let i=0; i<=8; i++){
            let uuid = `${props.boardId}`+ i;
            var box_id_selection = document.getElementById(uuid);
            box_id_selection.style.color="red";
            // var zain=  box_id_selection.value;
            
            console.log(box_id_selection,uuid);
        }
        setIsClicked(!isClicked);
        if(props.keyId == '0' || props.keyId == '3' || props.keyId == '6' ){
            for(let j=0; j<=6; j+=3){   
                let value = j+first_Vertical_Block_Combination;
               console.log(value); 
            }
            alert('hhh')
        }
                    
    }
    const onChangeHandler =(e)=>{
       let value1 =  e.target.value;
       setValue(value1);
    }
    const onKeyUpHandler =(e)=>{
        if(e.keyCode === 13){
            setIsClicked(!isClicked);
        }
    }

    
  if(isClicked){
   return <input type="text" className="button_block1" value={value} onChange={(e)=>{onChangeHandler(e)}} onKeyUp={(e)=>{onKeyUpHandler(e)}}/>
  }
   
   
   
   
    return (
        <div className="button_block">
            <button id={`${pid}`}  value={value} onClick={(e)=>checkId(e)} >{value} </button>
            
            {/* <button onClick={checkId} > <span id="valueOfState">{props.number}</span> </button> */}
         </div>
    )
}

export default Block;