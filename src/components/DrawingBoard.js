import React from 'react';

function DrawingBoard() {
  return (
    <div className="drawing-board">
      <h2>Drawing Board</h2>
      <div style={{ width: '500px', height: '300px', border: '1px solid black' }}>
        {/* Canvas will go here later */}
      </div>
    </div>
  );
}

export default DrawingBoard;