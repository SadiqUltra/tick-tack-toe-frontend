import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div>Player 1: X, Player 2: O</div>
          <p>Player 1's turn</p>
        <div className="Board">
            <div className="Board-Column" >
                <div className="Board-Row">X</div>
                <div className="Board-Row">X</div>
                <div className="Board-Row">X</div>
            </div>
            <div className="Board-Column" >
                <div className="Board-Row">X</div>
                <div className="Board-Row">X</div>
                <div className="Board-Row">X</div>
            </div>
            <div className="Board-Column" >
                <div className="Board-Row">X</div>
                <div className="Board-Row">X</div>
                <div className="Board-Row">X</div>
            </div>
        </div>

          <div className="Logs">
                <div className='Logs-Text'>Log Text</div>
                <div className='Logs-Text'>Log Text</div>
                <div className='Logs-Text'>Log Text</div>
                <div className='Logs-Text'>Log Text</div>
                <div className='Logs-Text'>Log Text</div>
                <div className='Logs-Text'>Log Text</div>
                <div className='Logs-Text'>Log Text</div>
                <div className='Logs-Text'>Log Text</div>
                <div className='Logs-Text'>Log Text</div>

          </div>
      </header>
    </div>
  );
}

const style ={

}

export default App;
