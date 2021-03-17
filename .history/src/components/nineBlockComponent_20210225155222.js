import React from 'react';
import Block from './block'
import './block.css'

const NineBlockBox = () =>{
    const single_block_Into_Nine = [1,2,3,4,5,6,7,8,9]; 
    
    
    let check_Function = () =>{
        alert('working');
    }

    return (
        <div className="nine_block_Style">
        {single_block_Into_Nine.map((s, i)=>{
            let random = Math.floor(Math.random() * (65 - 90))+90;
            const character = String.fromCharCode(random);
            return(
            <div style={{
                margin: '0px!important'
            }} >
                
                <Block number={character} value={i} click={check_Function} />
            </div>
            )
        })
            
        }
        </div>
    )
}
export default NineBlockBox;