import React from 'react';

const ChatBox = () => {
    return (
      <div style={Style}>
        <div style={destinationStyle}>Monaco</div>
        <div style={destinationStyle}>Venezuela</div>
        <div style={destinationStyle}>New York</div>
        <div style={destinationStyle}>Essaouira</div>
        <div style={destinationStyle}>Tokyo</div>
      </div>
    );
};

const Style = {
  color: 'black',
  left: '20%',
  margin: '20px 0 0 0',
};

const destinationStyle = {
  padding: '10px 15px 10px 15px',
  margin: '10px 10px 0 10px',
  fontSize: '20px',
  background: 'linear-gradient(to right, #F3FBFF, #D2EEFF)',
  borderRadius: '50px',
  fontWeight: '500',
};

export default ChatBox;
