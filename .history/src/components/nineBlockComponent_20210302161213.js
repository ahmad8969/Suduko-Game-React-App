import React from 'react';
import Block from './block'
import './block.css'

const NineBlockBox = (props) =>{
    const single_block_Into_Nine = [1,2,3,4,5,6,7,8,9]; 
    
    
    let check_Function = () =>{
        alert('working');
    }



     const changeState = () =>{ 
        
        // stateValue.style.display ='none';
        var input1=  document.createElement('INPUT');
        input1.setAttribute("type", "text");
        // input1.setAttribute("value", );
        input1.style.height= '60px';
        input1.style.width= '60px';
        input1.style.position="relative";

        input1.style.zIndex="1"
        input1.backgroundColor='pink !important';
        // input1.style.backgroundImage= 'url(../images/wood.jpg)';
        input1.style.fontSize= '20px';
        input1.style.fontWeight='600'
        input1.style.color='black'
        let stateValue = document.getElementById('valueOfState').appendChild(input1);

        let num = stateValue
        console.log(num)
        // setValue(num);

        
        
    }
    return (
        <div className="nine_block_Style">
            {props.children}
        </div>
    )
}
export default NineBlockBox;




// {single_block_Into_Nine.map((s,i)=>{
//     let random = Math.floor(Math.random() * (49 - 57)) + 57;
//     const character = String.fromCharCode(random);      
    
//   return(
//     <div>
//       {/* <Block keyId={i} boardId={props.id}  number={character}/> */}
//       {props.children}
//       </div>
//   )
//   })}
