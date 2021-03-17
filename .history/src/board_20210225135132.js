import './App.css';
import Block from './components/block'
import NineBlock from './components/nineBlockComponent';

function Board () {
  const nine_block_Element_into_Nine = [1,2,3,4,5,6,7,8,9];
  return (
    
    <div >
    <div className="board_nine_block_Style">
    {nine_block_Element_into_Nine.map(()=>{
      return(
      <div>
      <NineBlock />
      </div>
      )
    })  
    }
    </div>
      
    </div>
  );
}

export default Board;
