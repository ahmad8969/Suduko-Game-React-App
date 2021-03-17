import React, {useState} from 'react';

import './block.css';


const Block = (props)=>{
    var uniqueId = `${props.rowId}`+ `${props.colId}` ;
    const[value, setValue]= useState(props.value)
    const[isClicked, setIsClicked]= useState(false);
    const[counter, setCounter]= useState(0);

    const checkCounter = () =>{
        
        if(counter<=1){

            alert(setCounter(12));
            // console.log(setCounter(counter+1));
        }else{
            return;
        }
    }
    
    
    const changeState = (e) => {
        checkCounter();
        props.click();
        setIsClicked(!isClicked);
    }
    const onChangeHandler = (e) =>{
        let getting_Current_Value = e.target.value;
        console.log(getting_Current_Value);
        setValue(getting_Current_Value)
    }
    const onKeyUpHandler = (e) =>{
        
        
        if(e.keyCode ===13){
            if(e.target.value ===''){
                alert("fill this");
            }else{ 
            setIsClicked(!isClicked);
        }
        }
    }
    const onFocusOuts = (e) =>{
        let previousValue = e.target.value;
        console.log(previousValue);
            if(previousValue === ''){
                setValue(props.value);
            }else{
                setValue(previousValue);
            }
        
    }

    if(isClicked){
        return <input className="inputStyle" value={value}  
         onKeyUp={(e)=>{onKeyUpHandler(e)}}
         onChange={(e) => {onChangeHandler(e)}}
         onBlur={(e) => {onFocusOuts(e)}}
          type="text"/>;
    }

return(
    <div className="button_block">
    <button id={props.keys} onClick={(e)=>{changeState(e);}} value={value}> {counter}</button>
    </div>
    
)
}

export default Block;