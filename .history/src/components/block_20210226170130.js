import React, {useState} from 'react';
import './block.css'

const Block = (props) =>{

    let[value, setValue]= useState(props.number);
    var uniqueId = `${props.boardId}`+ `${props.keyId}` ;
    const [pid] = useState( uniqueId) 
    let checkId = ()=>{
        if(pid == `${props.boardId}`+ `${props.keyId}`){
            // alert(pid)
            document.getElementById(pid).style.display ='none';
            document.getElementById('input').style.display ='block'

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
    // const changeState = () =>{ 
        
    //     // stateValue.style.display ='none';
    //     var input1=  document.createElement('INPUT');
    //     input1.setAttribute("type", "text");
    //     // input1.setAttribute("value", );
    //     input1.style.height= '60px';
    //     input1.style.width= '60px';
    //     input1.style.position="relative";

    //     input1.style.zIndex="1"
    //     input1.backgroundColor='pink !important';
    //     // input1.style.backgroundImage= 'url(../images/wood.jpg)';
    //     input1.style.fontSize= '20px';
    //     input1.style.fontWeight='600'
    //     input1.style.color='black'
    //     let stateValue = document.getElementById('valueOfState').appendChild(input1);

    //     let num = stateValue
    //     console.log(num)
    //     // setValue(num);

        
        
    // }
  
   
   
   
   
    return (
        <div className="button_block">
            <button id={pid} onClick={checkId} >{value} </button>
            {/* <button onClick={checkId} > <span id="valueOfState">{props.number}</span> </button> */}
            <input type="text" className="button_block" id ={input}  style={{display:"none"}} />
         </div>
    )
}

export default Block;