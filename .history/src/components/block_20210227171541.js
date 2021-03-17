import React, {useState} from 'react';
import './block.css'

const Block = (props) =>{

    const [value, setValue]= useState(props.number);
    const [isClicked,  setIsClicked]= useState(false);
   


    var uniqueId = `${props.boardId}`+ `${props.keyId}` ;
    const [pid] = useState(uniqueId) 
    let checkId = (e)=>{
        console.log(e.target.id)
        for(let i=0; i<=8; i++){
            let uuid = `${props.boardId}`+ i;
            var ahmad = document.getElementById(uuid);
            ahmad.style.color="red";
            console.log(uuid);
        }
        setIsClicked(!isClicked);
                    
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
            <button id={`${pid}`} onClick={(e)=>checkId(e)} >{value} </button>
            
            {/* <button onClick={checkId} > <span id="valueOfState">{props.number}</span> </button> */}
         </div>
    )
}

export default Block;