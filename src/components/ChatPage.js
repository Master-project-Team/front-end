import React from 'react';
import ButtonNouvChat from './ButtonNouvChat';
import Discussion from './Discussion';
import Hello from './Hello';
import ChatBox from './ChatBox';
import { Link } from 'react-router-dom';
import bar_chat from '../assets/bar_chat.png';
import Message from './Message';
import MessageIA from './MessageIA';

function ChatPage() {

  return (
    <div style={AppStyle}>
      <Link to="/" style={ButtonAccueilStyle}>
        Accueil
      </Link>
      <div style={historiqueStyle}>
        <ButtonNouvChat />
        <Discussion />
      </div>
      <div style={mainStyle}>
        <Hello />
        <Message />
        <MessageIA />
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

const ButtonAccueilStyle = {
  background: 'linear-gradient(to right, #33F0FF, #8333FF)',
  border: '1px solid white',
  borderRadius: '50px',
  width: '150px',
  height: '50px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  top: '20px',
  right: '20px',
  cursor: 'pointer',
  color: 'white',
  textDecoration: 'none'
};
  

const historiqueStyle = {
  backgroundImage: `url(${bar_chat})`,
  backgroundSize: 'cover',
  display: 'flex',
  flexDirection: 'column',
  width: '20%',
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
