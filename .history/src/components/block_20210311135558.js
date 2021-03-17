import React, {useState, useEffect} from 'react';

import './block.css';


const Block = ({rowId,colId,keys,click,isclick})=>{
    var uniqueId = `${rowId}`+ `${colId}`;

    const[value, setValue]= useState()
    const[isClicked, setIsClicked]= useState(false);

    useEffect(() => {
    randomCharacters();
      }, []);
    const randomCharacters = () => {
    let random_ascii = Math.floor(Math.random() * (126 - 33 + 1)) + 33;
    let charVal = String.fromCharCode(random_ascii);
    setValue(charVal);
  };
    

    
    
    
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
                setValue1(value);
            }else{
                setValue1(previousValue);
            }
        
    }

    if(isClicked){
        return <input className="inputStyle" value={value}  
         onKeyUp={(e)=>{onKeyUpHandler(e)}}
         onChange={(e) => {onChangeHandler(e)}}
        //  onBlur={(e) => {onFocusOuts(e)}}
          type="text"/>;
    }

return(
    <div className="button_block">
    <button id={keys} onClick={(e)=>{setIsClicked(isclick);click(keys, rowId, colId,isClicked,e)}} value={value}> {value}</button>
    </div>
    
)
}

export default Block;