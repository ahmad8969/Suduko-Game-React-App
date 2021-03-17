import React from 'react';
import Block from './block'
import './block.css'

const NineBlockBox = () =>{
    const single_block_Into_Nine = [1,2,3,4,5,6,7,8,9] 
    
    return (
        <div className="nine_block_Style">
        {single_block_Into_Nine.map((s)=>{
            return(
            <div >
                <Block number={s} />
            </div>
            )
        })
            
        }
        </div>
    )
}
export default NineBlockBox;