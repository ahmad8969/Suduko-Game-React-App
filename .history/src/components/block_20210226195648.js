import React, {useState} from 'react';
import './block.css'

const Block = (props) =>{

    const [value, setValue]= useState(props.number);
    const [isClicked,  setIsClicked]= useState(false);

    var uniqueId = `${props.boardId}`+ `${props.keyId}` ;
    const [pid] = useState( uniqueId) 
    let checkId = (e)=>{
        setIsClicked(!isClicked);

        if(pid == `${props.boardId}`+ `${props.keyId}`){
            var idd = e.target.value
            console.log();
            
            var button = document.getElementById(pid);
            button.style.display ='none';
            var updateVal =document.getElementById('input');
            updateVal.style.display ='block';
            updateVal.value = idd;
            updateVal.addEventListener("keyup", function(event) {
                if (event.keyCode === 13) {
                    var forValue = updateVal.value;
                    setValue(forValue);
                    button.style.display ='block';
                    updateVal.style.display ='none';
                }
            });
            
            
        }

        
    }
    const changeState = () =>{ 
    
        // let getting_new_value = prompt('enter New Value:', 'enter digit' );
        // if(getting_new_value <=10){
        //     setValue(getting_new_value);
        //     checkId();
        // }else{
        //     alert('enter digits 0-9 please'  +  getting_new_value  +  'is invalid number')
        // }
        
        
    }
    
  if(isClicked){
   return <input type="text" className="button_block1" />;
  }
   
   
   
   
    return (
        <div className="button_block">
            <button id={pid} onClick={(e)=>checkId(e)} value={value} >{value} </button>
            {/* <button onClick={checkId} > <span id="valueOfState">{props.number}</span> </button> */}
         </div>
    )
}

export default Block;