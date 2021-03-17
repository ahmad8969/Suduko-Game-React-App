import React, {useState} from 'react';

import './block.css';


const Block = ({rowId,colId,keys,value1,click,isClick})=>{
    var uniqueId = `${rowId}`+ `${colId}`;

    const[value, setValue1]= useState()
    const[isClicked, setIsClicked]= useState(false);
    

    
    
    
    // const changeState = (e) => {
    //     setCounter(counter+1);
        
    //     if(counter == 0){
    //         props.click();
    //     setIsClicked(!isClicked);
    //     console.log(counter)
    //     }
    //     else if(counter > 0){
    //         console.log(counter)
    //         alert("jfksjfkjsalj")
    //         return;
    //     }
        
    // }
    const onChangeHandler = (e) =>{
        let getting_Current_Value = e.target.value;
        console.log(getting_Current_Value);
        setValue1(getting_Current_Value)
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
                setValue1(value1);
            }else{
                setValue1(previousValue);
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
    <button id={keys} onClick={(e)=>{setIsClicked(click);click(keys, rowId, colId,isClicked,e)}} value={value}> {value1}</button>
    </div>
    
)
}

export default Block;