import React from 'react';

const ChatBox = () => {
    return (
      <div style={Style}>
        <p>Message à TravelIA...</p>
      </div>
    );
};

const Style = {
  backgroundColor: '#D9D9D9',
  borderRadius: '50px',
  width: 'calc(10px + 100vmin)',
  display: 'flex',
  justifyContent: 'center',
  color: '#8C8282',
  position: 'absolute',
  bottom: '20px',
};

export default ChatBox;
