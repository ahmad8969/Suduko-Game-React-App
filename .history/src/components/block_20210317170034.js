import React, { useState, useEffect } from "react";


import "./block.css";

const Block = ({xAxisRight,xAxisleftPath,yAxisUpPath,yAxisDownPath,enableBlockDignolUpWardRight,enableBlockDignolUpWardLeft,enableBlockDignolDownWardRight
  dUpwardLeft,dRightDown,left, right,Up,Down,dUpwardRight, keys, click, isclick, blockEnable}) => {
  // var uniqueId = `${rowId}`+ `${colId}`;

  const [value, setValue] = useState();
  const [isClicked, setIsClicked] = useState(isclick);

  useEffect(() => {
    randomCharacters();
    
  }, []);
  const randomCharacters = () => {
    let random_ascii = Math.floor(Math.random() * (126 - 33 + 1)) + 33;
    let charVal = String.fromCharCode(random_ascii);
    setValue(charVal);
  };

  const onChangeHandler = (e) => {
    let getting_Current_Value = e.target.value;
    
    setValue(getting_Current_Value);
  };
  const onKeyUpHandler = (e) => {
    
      if (e.target.value === "") {
                // alert("fill this");
      } else {
        setIsClicked(!isClicked);
        blockEnable();
      }
      
      if(right){
        xAxisRight();
      }
       if(left){
        xAxisleftPath();
      } if(Up){
        yAxisUpPath();
      }if(Down){
        yAxisDownPath();
      }
      if(dUpwardRight){
        enableBlockDignolUpWardRight()
      }
      if(dUpwardLeft){
        enableBlockDignolUpWardLeft();
      }
      if(dRightDown){
        enableBlockDignolDownWardRight();
      }
    
  };
  const onFocusOuts = (e) => {
    let previousValue = e.target.value;
    console.log(previousValue);
    if (previousValue === "") {
      setValue(value);
    } else {
      setValue(previousValue);
    }
  };

  if (isClicked) {
    return (
      <input
        className="inputStyle"
        value={value}
        onKeyUp={(e) => {
          onKeyUpHandler(e);
        }}
        onChange={(e) => {
          onChangeHandler(e);
        }}
        onBlur={(e) => {
          onFocusOuts(e);
        }}
        type="text"
      />
    );
  }

  return (
    <div className="button_block">
      <button
        id={keys}
        onClick={(e) => {
          click();
          setIsClicked(!isclick);
        }}
        value={value}
      >
        {keys}
      </button>
    </div>
  );
};

export default Block;
