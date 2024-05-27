import React from 'react';
import ButtonNouvChat from './ButtonNouvChat';
import Discussion from './Discussion';
import Hello from './Hello';
import ChatBox from './ChatBox';

function ChatPage() {

  return (
    <div style={AppStyle}>
      <div style={historiqueStyle}>
        <ButtonNouvChat />
        <Discussion />
      </div>
      <div style={mainStyle}>
        <Hello />
        <ChatBox />
      </div>
    </div>
  );
}

const AppStyle = {
  display: 'flex',
  flexDirection: 'row',
  minHeight: '100vh'
};

const historiqueStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '20%',
  backgroundColor: '#827D88',
  alignItems: 'left'
};

const mainStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '80%',
  alignItems: 'center'
  //justify-content: center;
  //flex-grow: 1;
};

export default ChatPage;
