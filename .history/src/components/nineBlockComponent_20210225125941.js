import React from 'react';
import Block from './block'

const NineBlockBox = () =>{
    const nine_Block_Of_Element = [1,2,3,4,5,6,7,8,9] 
    
    return (
        <div>
        {nine_Block_Of_Element.map(()=>{
            <div>
                <Block />
            </div>
        })
            
        }
        </div>
    )
}
export default NineBlockBox;