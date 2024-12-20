import React from 'react';

function Chat() {
  return (
    <div className="chat">
      <h2>Chat</h2>
      <div style={{ height: '200px', border: '1px solid gray', overflowY: 'scroll' }}>
        <div>User1: Hello!</div>
        <div>User2: Hi there!</div>
      </div>
      <input type="text" placeholder="Type your message..." />
    </div>
  );
}

export default Chat;