import './App.css';
import Block from './components/block'
import NineBlock from './components/nineBlockComponent';
function Board () {
  return (
    <div className="App">
    <h1>Board</h1> 
      <NineBlock />
    </div>
  );
}

export default Board;
