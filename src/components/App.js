import React from 'react';
import '../App.css'; // Corrected import path
import DrawingBoard from './DrawingBoard';
import Chat from './Chat';
import IdeaGenerator from './IdeaGenerator';

function App() {
  return (
    <div className="App">
      
      <div className='left'>
        <div className='container1'>
          <h2>How to play</h2>
          <ol>
            <li><p>Start streaming (NOT THIS PAGE)</p></li>
            <li><p>Choose disadvantages</p></li>
            <li><p>Start when ready</p></li>
          </ol>
        </div>

        <div className='container1'>
          <h2>You can never:</h2>
          <ul>
            <li><p>Say/type/draw the word or parts of it. </p></li>
            <li><p>Type or draw any Es</p></li>
            <li><p>Do rhyming/sounds like</p></li>
            <li><p>Prep any programs (like opening tabs), although you open programs in advance for if you need them</p></li>
          </ul>
          <p>No punishments just don’t do it</p>
        </div>
      </div>
      <div className='left'>
        <div className='container1 disadvantagesContainer'>

          <h2>Disadvantages</h2>
          <div className='disadvantages'>
            <div className='disadvantage'><input type='checkbox'></input><p>MS Paint Only</p></div>
            <div className='disadvantage'><input type='checkbox'></input><p>No talking</p></div>
            <div className='disadvantage'><input type='checkbox'></input><p>No browsers</p></div>
            <div className='disadvantage'><input type='checkbox'></input><p>Mouse / Trackpad only</p></div>
            <div className='disadvantage'><input type='checkbox'></input><p>Wikipedia only</p></div>
            <div className='disadvantage'><input type='checkbox'></input><p>Can only give clues while having at least 100 pts in chrome dino game</p></div>
          </div>
        
        </div>
        <div className='container1'>
          <IdeaGenerator />
        </div>

        
      </div>
    </div>
  );
}

export default App; 