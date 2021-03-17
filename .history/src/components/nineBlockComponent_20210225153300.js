import React from 'react';
import Block from './block'
import './block.css'

const NineBlockBox = () =>{
    const single_block_Into_Nine = [1,2,3,4,5,6,7,8,9]; 
    
    let checkrandom = function (){
        let i=null;
        for (i=0; i<=9; i++){
            
           console.log( Math.floor(Math.random() * 100));

        }
    }
    checkrandom();
    let check_Function = () =>{
        alert('working');
    }

    return (
        <div className="nine_block_Style">
        {single_block_Into_Nine.map((s, i)=>{
            return(
            <div style={{
                margin: '0px!important'
            }} >
                <Block number={s} value={i} click={check_Function} />
            </div>
            )
        })
            
        }
        </div>
    )
}
export default NineBlockBox;