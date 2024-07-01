import React from 'react';

const ChatBox = () => {
    return (
      <div style={Style}>
        Je me trouve a Osaka donne moi une bonne adresse de restaurant pas trop chere pour manger avec mes enfants.
      </div>
    );
};

const Style = {
  backgroundColor: '#D9D9D9',
  borderRadius: '25px',
  display: 'flex',
  justifyContent: 'center',
  position: 'absolute',
  right: '20px',
  top: '550px',
  padding: '10px',
};

export default ChatBox;
