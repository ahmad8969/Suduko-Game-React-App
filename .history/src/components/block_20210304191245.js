import React, {useState} from 'react';

import './block.css';


const Block = (props)=>{
    var uniqueId = `${props.rowId}`+ `${props.colId}` ;
    const[value1, setValue]= useState(props.value)
    const[isClicked, setIsClicked]= useState(false);

    const changeState = (e) => {
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
            setIsClicked(!isClicked);
        }
    }

    if(isClicked){
        return <input className="inputStyle" value={value} onKeyUp={(e)=>{onKeyUpHandler(e)}} onChange={(e) => {onChangeHandler(e)}} type="text"/>;
    }

return(
    <div className="button_block">
    <button id={props.keys} onClick={(e)=>{changeState(e);}} value={value}> {value}</button>
    </div>
    
)
}

export default Block;