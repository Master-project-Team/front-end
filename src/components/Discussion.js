import React from 'react';

const ChatBox = () => {
    return (
      <div style={Style}>
        <ul>
          <li>Paris - Londres</li>
          <li>Londres - Paris</li>
          <li>Paris - New York</li>
          <li>New York - Paris</li>
          <li>Paris - Tokyo</li>
        </ul>
      </div>
    );
};

const Style = {
  color: 'white',
  left: '20%'
};

export default ChatBox;
