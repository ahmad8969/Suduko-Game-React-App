import './App.css';
import Block from './components/block'
import NineBlock from './components/nineBlockComponent';
function Board () {
  const nine_block_Element_into_Nine = [1,2,3,4,5,6,7,8,9];
  return (
    <div className="App">
    <h1>Board</h1> 
    {nine_block_Element_into_Nine.map(()=>{
      return(
      <div>
      <NineBlock />
      </div>
      )
    })
      
    }
      
    </div>
  );
}

export default Board;
