import './App.css';
import Block from './components/block'
import NineBlock from './components/nineBlockComponent';
 

function Board () {
  const nine_block_Element_into_Nine = [1,2,3,4,5,6,7,8,9];
  const check = function(){
    alert('check')
    
  }
  return (
    
    <div className="App">
    <h1>SUDUKO GAME </h1>
    <div className="board_nine_block_Style">
    {nine_block_Element_into_Nine.map(()=>{
      return(
      <div>
      <NineBlock>
      {nine_block_Element_into_Nine.map(()=>{
        let random = Math.floor(Math.random() * (33 - 126)) + 126;
        const character = String.fromCharCode(random);
      return(
        <div>
          <Block click={check} number={character}></Block>
          </div>
      )
      })
      }
      </NineBlock>
      </div>
      )
    })  
    }
    </div>
      
    </div>
  );
}

export default Board;
