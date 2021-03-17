import React, { useState } from "react"; //{useState}
import "./App.css";
import Block from "./components/block";
import NineBlock from "./components/nineBlockComponent";

// function useForceUpdate(){
//   const [counter,setCounter]= useState(0);
//   return setCounter(counter+1);

// }
function Board() {
  const xAxis_Selection_Array_Right = [];
  const xAxis_Selection_Array_Left = [];
  const yAxis_Selection_Array_up = [];
  const yAxis_Selection_Array_Down = [];
  const DiagonalSelectionUpward_Selection_Array = [];
  const DiagonalSelectionUpwardLeftUp_selection_Array = [];
  const DiagonalSelectionDownward_selection_Array = [];
  const DiagonalSelectionDownwardLeftDown_selection_Array = [];
  const complete_blocks_Array = [];
  let complete_selection_array = [];

  const nine_block_Element_into_Nine = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const single_block_Into_Nine = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const [getting_current_id, setGetting_current_id] = useState();
  const [Iid, setIid] = useState();
  const [Jid, setJid] = useState();
  const [isClicked, setIsClicked] = useState(false);
  const [count, setCount] = useState(0);
  let myFilterdIds= [];
 

  const Click = (idOfSpecificButton, i, j) => {
    setGetting_current_id(idOfSpecificButton);
    setIid(i);
    setJid(j);
    setIsClicked(!isClicked);
    setCount(count + 1);
    finalPath(id);

    console.log(Iid, Jid, getting_current_id);
  };

  const XaxisSelectionRight = (i, j) => {
    for (let xAxis = j; xAxis <= 8; xAxis++) {
      let creatId = `${i}${xAxis}`;
      if (count === 1) {
        document.getElementById(creatId).style.backgroundColor = isClicked
          ? "red"
          : null;
        xAxis_Selection_Array_Right.push(creatId);
      }
    }
  };
  const XaxisSelectionLeft = (i, j) => {
    for (let xAxis = j; xAxis >= 0; xAxis--) {
      let creatId = `${i}${xAxis}`;
      if (count === 1) {
        document.getElementById(creatId).style.backgroundColor = isClicked
          ? "red"
          : null;
        xAxis_Selection_Array_Left.push(creatId);
      }
    }
  };

  const YaxisSelectionDown = (i, j) => {
    for (let xAxis1 = i; xAxis1 <= 8; xAxis1++) {
      let creatId = `${xAxis1}${j}`;
      if (count === 1) {
        document.getElementById(creatId).style.backgroundColor = isClicked
          ? "red"
          : null;
        yAxis_Selection_Array_Down.push(creatId);
      }
    }
  };
  const YaxisSelectionUp = (i, j) => {
    for (let xAxis1 = i; xAxis1 >= 0; xAxis1--) {
      let creatId = `${xAxis1}${j}`;
      if (count === 1) {
        document.getElementById(creatId).style.backgroundColor = isClicked
          ? "red"
          : null;
        yAxis_Selection_Array_up.push(creatId);
      }
    }
  };

  const DiagonalSelectionUpward = (selectedId) => {
    let array_of_length = nine_block_Element_into_Nine.length;
    console.log(array_of_length);
    console.log(typeof array_of_length);
    let get_the_id_of_current_box = parseInt(selectedId);
    console.log(get_the_id_of_current_box);
    for (
      let hello = get_the_id_of_current_box;
      hello >= 0;
      hello -= array_of_length
    ) {
      if (hello <= 9) {
        if (hello === 9) {
          return;
        } else {
          var concatination = 0 + `${hello}`;
          if (count === 1) {
            document.getElementById(
              concatination
            ).style.backgroundColor = isClicked ? "indigo" : null;
            DiagonalSelectionUpward_Selection_Array.push(concatination);
          }
        }
      } else if (
        hello === 19 ||
        hello === 29 ||
        hello === 39 ||
        hello === 49 ||
        hello === 59 ||
        hello === 69 ||
        hello === 79
      ) {
        return;
      } else {
        if (count === 1) {
          document.getElementById(`${hello}`).style.backgroundColor = isClicked
            ? "indigo"
            : null;
          DiagonalSelectionUpward_Selection_Array.push(`${hello}`);
        }
      }
    }
  };
  const DiagonalSelectionUpwardLeftUp = (selectedId) => {
    let array_of_length = 2 + nine_block_Element_into_Nine.length;
    console.log(array_of_length);
    console.log(typeof array_of_length);
    let get_the_id_of_current_box = parseInt(selectedId);
    console.log(get_the_id_of_current_box);
    for (
      let hello = get_the_id_of_current_box;
      hello >= 0;
      hello -= array_of_length
    ) {
      if (hello <= 9) {
        var concatination = 0 + `${hello}`;
        if (count === 1) {
          document.getElementById(
            concatination
          ).style.backgroundColor = isClicked ? "indigo" : null;
          DiagonalSelectionUpwardLeftUp_selection_Array.push(concatination);
        }
        
        return;
      } else if (
        hello === 9 ||
        hello === 19 ||
        hello === 29 ||
        hello === 39 ||
        hello === 49 ||
        hello === 59 ||
        hello === 69 ||
        hello === 79
      ) {
        return;
      } else {
        if (count === 1) {
          document.getElementById(`${hello}`).style.backgroundColor = isClicked
            ? "indigo"
            : null;
          DiagonalSelectionUpwardLeftUp_selection_Array.push(`${hello}`);
        }
      }
      console.log(DiagonalSelectionUpwardLeftUp_selection_Array);
    }
  };

  const DiagonalSelectionDownward = (selectedId) => {
    let array_of_length = nine_block_Element_into_Nine.length;
    console.log(array_of_length);
    console.log(typeof array_of_length);
    let get_the_id_of_current_box = parseInt(selectedId);
    console.log(get_the_id_of_current_box);
    for (
      let hello = get_the_id_of_current_box;
      hello <= 88;
      hello += array_of_length
    ) {
      if (hello === 0) {
        return;
      } else if (hello <= 9) {
        var concatination = 0 + `${hello}`;
        if (count === 1) {
          document.getElementById(
            concatination
          ).style.backgroundColor = isClicked ? "indigo" : null;
          DiagonalSelectionDownward_selection_Array.push(concatination);
        }
      } else if (
        hello === 19 ||
        hello === 29 ||
        hello === 39 ||
        hello === 49 ||
        hello === 59 ||
        hello === 69 ||
        hello === 79
      ) {
        return;
      } else {
        if (count === 1) {
          document.getElementById(`${hello}`).style.backgroundColor = isClicked
            ? "indigo"
            : null;
          DiagonalSelectionDownward_selection_Array.push(`${hello}`);
        }
      }
    }
    console.log(DiagonalSelectionDownward_selection_Array);
  };
  const DiagonalSelectionDownwardLeftDown = (selectedId) => {
    let array_of_length = 2 + nine_block_Element_into_Nine.length;
    console.log(array_of_length);
    console.log(typeof array_of_length);
    let get_the_id_of_current_box = parseInt(selectedId);
    console.log(get_the_id_of_current_box);
    for (
      let hello = get_the_id_of_current_box;
      hello <= 88;
      hello += array_of_length
    ) {
      if (hello === 0) {
        return;
      } else if (hello <= 9) {
        var concatination = 0 + `${hello}`;
        if (count === 1) {
          document.getElementById(
            concatination
          ).style.backgroundColor = isClicked ? "indigo" : null;
          DiagonalSelectionDownwardLeftDown_selection_Array.push(concatination);
        }
      } else if (
        hello === 19 ||
        hello === 29 ||
        hello === 39 ||
        hello === 49 ||
        hello === 59 ||
        hello === 69 ||
        hello === 79
      ) {
        return;
      } else {
        if (count === 1) {
          document.getElementById(`${hello}`).style.backgroundColor = isClicked
            ? "indigo"
            : null;
          DiagonalSelectionDownwardLeftDown_selection_Array.push(`${hello}`);
        }
      }
    }
    console.log(DiagonalSelectionDownwardLeftDown_selection_Array);
  };

  const creatingReadOnlyBlock = () => {
    nine_block_Element_into_Nine.map((val) => {
      return single_block_Into_Nine.map((valu) => {
        let valueOfId = `${val}${valu}`;
        return complete_blocks_Array.push(valueOfId);
      });
    });
  };
  const filter_two_arrays = () => {
    complete_selection_array = [
      ...xAxis_Selection_Array_Right,
      ...xAxis_Selection_Array_Left,
      ...yAxis_Selection_Array_Down,
      ...yAxis_Selection_Array_up,
      ...DiagonalSelectionUpward_Selection_Array,
      ...DiagonalSelectionUpwardLeftUp_selection_Array,
      ...DiagonalSelectionDownward_selection_Array,
      ...DiagonalSelectionDownwardLeftDown_selection_Array,
    ];
    console.log(complete_selection_array);
    let filteredId = complete_blocks_Array.filter(
      (id) => !complete_selection_array.includes(id)
    );
    filteredId.map((id) => {
      return (document.getElementById(id).disabled = true);
    });
  };
  const selectedPath = (id) => {
    // console.log(xAxis_Selection_Array);
    // console.log(yAxis_Selection_Array);
    // console.log(DiagonalSelectionUpward_Selection_Array);
    // console.log(DiagonalSelectionUpwardLeftUp_selection_Array);
    // console.log(DiagonalSelectionDownward_selection_Array);
    // console.log(DiagonalSelectionDownwardLeftDown_selection_Array);
    let selectedPath = [
      ...xAxis_Selection_Array_Right,
      ...xAxis_Selection_Array_Left,
      ...yAxis_Selection_Array_Down,
      ...yAxis_Selection_Array_up,
      ...DiagonalSelectionUpward_Selection_Array,
      ...DiagonalSelectionUpwardLeftUp_selection_Array,
      ...DiagonalSelectionDownward_selection_Array,
      ...DiagonalSelectionDownwardLeftDown_selection_Array,
    ];
     let filterdIds = selectedPath.filter((elId) => !id.includes(elId));
    filterdIds.map((id) => {
      myFilterdIds.push(id);
      return (document.getElementById(id).disabled = true);
    });
  };
  const path = () => {
    myFilterdIds.map((id) => {
      return (document.getElementById(id).disabled = false);
    });
  };

  const changeStateHandler = (getting_current_id, Iid, Jid) => {
    document.getElementById(getting_current_id).style.color = "green";
    XaxisSelectionRight(Iid, Jid);
    XaxisSelectionLeft(Iid, Jid);
    YaxisSelectionDown(Iid, Jid);
    YaxisSelectionUp(Iid, Jid);
    DiagonalSelectionUpward(getting_current_id);
    DiagonalSelectionDownward(getting_current_id);
    DiagonalSelectionDownwardLeftDown(getting_current_id);
    DiagonalSelectionUpwardLeftUp(getting_current_id);
    

    // puttingArrayInState();
  };
  const path_selection =(id)=>{
      let finalPath = [
      ...xAxis_Selection_Array_Right,
      ...xAxis_Selection_Array_Left,
      ...yAxis_Selection_Array_Down,
      ...yAxis_Selection_Array_up,
      ...DiagonalSelectionUpward_Selection_Array,
      ...DiagonalSelectionUpwardLeftUp_selection_Array,
      ...DiagonalSelectionDownward_selection_Array,
      ...DiagonalSelectionDownwardLeftDown_selection_Array,
    ];
    let arr1 = [...xAxis_Selection_Array_Right];
    let arr2 = [...xAxis_Selection_Array_Left];
    let arr3 = [...yAxis_Selection_Array_up];
    let arr4 = [...yAxis_Selection_Array_Down];
    let arr5 = [...DiagonalSelectionUpward_Selection_Array];
    let arr6 = [...DiagonalSelectionUpwardLeftUp_selection_Array];
    let arr7 = [...DiagonalSelectionDownward_selection_Array];
    let arr8 = [...DiagonalSelectionDownwardLeftDown_selection_Array];

    for(let a= 0; a<=arr1.length; a++){
      if(id===arr1[a]){
        let pathIds = Path.filter((elId) => !arr1.includes(elId));
        pathIds.map((pathId)=>{
         return(
          ( document.getElementById(pathId).disabled=true),
          (document.getElementById(pathId).style.backgroundColor="brown")
          );
        })
      }
    }

  }

  
  if (Iid && Jid && getting_current_id != null && count===1) {
    changeStateHandler(getting_current_id, Iid, Jid);
    creatingReadOnlyBlock();
    filter_two_arrays();
  }
  if(isClicked===true){
    selectedPath(getting_current_id);
  }

  return (
    <div className="App">
      <h1>SUDUKO GAME </h1>
      <div className="board_nine_block_Style">
        {nine_block_Element_into_Nine.map((s, i) => {
          return (
            <div>
              <NineBlock id={i}>
                {single_block_Into_Nine.map((s, j) => (
                  <Block
                    blockEnable={path}
                    rowId={i}
                    click={Click}
                    colId={j}
                    keys={`${i}${j}`}
                    isclick={isClicked}
                  ></Block>
                ))}
              </NineBlock>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Board;
