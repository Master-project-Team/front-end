import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import bar_chat from '../assets/bar_chat.png';
import logo from '../assets/image.png';
import Conversation from './Conversation.js';

function ChatPage() {
  const [conversations, setConversations] = useState([]);
  const [currentConversationId, setCurrentConversationId] = useState(null);
  const [selectedConversationId, setSelectedConversationId] = useState(null);

  useEffect(() => {
    loadConversationLinks();
  }, []);

  const loadConversationLinks = () => {
    fetch('https://travel-mate-2.azurewebsites.net/conversation_links')
      .then(response => response.json())
      .then(data => setConversations(data));
  };

  const startNewConversation = () => {
    fetch('https://travel-mate-2.azurewebsites.net/new_conversation', { method: 'POST' })
      .then(response => response.json())
      .then(data => {
        setCurrentConversationId(data.conversation_id);
        setSelectedConversationId(data.conversation_id);
        loadConversationLinks();
      });
  };

  const handleConversationClick = (conversationId) => {
    setCurrentConversationId(conversationId);
    setSelectedConversationId(conversationId);
  };

  return (
    <div style={AppStyle}>
      <Link to="/" style={ButtonAccueilStyle}>
        Accueil
      </Link>
      <div style={historiqueStyle}>
        <div style={buttonContainerStyle}>
          <button style={buttonStyle} onClick={startNewConversation}>
            <img src={logo} style={chatLogo} alt="logo" />
            Nouveau chat
          </button>
          <div style={underlineStyle}></div>
        </div>
        <div style={discutionStyle}>
          {conversations.map(conversationId => (
            <a 
              key={conversationId} 
              href="#" 
              style={conversationId === selectedConversationId ? selectedDestinationStyle : destinationStyle} 
              onClick={() => handleConversationClick(conversationId)}
            >
              Conversation {conversationId}
            </a>
          ))}
        </div>
      </div>
      <div style={mainStyle}>
        <div style={cadrantstyle}>
          {!currentConversationId ? (
            <div style={helloStyle}>
              <img src={logo} style={logoStyle} alt="logo" />
              <p>
                Bonjour comment puis-je vous aider aujourd’hui ?
              </p>
            </div>
          ) : (
            <div style={conversationsStyles}>
              <Conversation conversationId={currentConversationId} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const cadrantstyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  
}

const conversationsStyles = {
  display: 'flex',
  flexDirection: 'column',
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
  width: '80%',
  height: '100vh',
  padding: '50px 0 0 0',
  maxHeight: '90vh',
  alignItems: 'center',
  justifyContent: 'center',
};

const discutionStyle = {
  color: 'black',
  left: '20%',
  margin: '20px 0 0 0',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxHeight: '82vh',
  overflow: 'auto', // Keep auto to allow scrolling
  scrollbarWidth: 'none', // For Firefox
  msOverflowStyle: 'none' // For IE and Edge
};

const destinationStyle = {
  padding: '10px 15px',
  margin: '10px 10px 0 10px',
  fontSize: '20px',
  background: 'linear-gradient(to right, #F3FBFF, #D2EEFF)',
  borderRadius: '50px',
  fontWeight: '500',
  cursor: 'pointer',
  color: 'black',
  width: '200px',
  textDecoration: 'none',
};

const selectedDestinationStyle = {
  ...destinationStyle,
  background: 'linear-gradient(to right, #33F0FF, #8333FF)',
  color: 'white',
};

const buttonContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
};

const buttonStyle = {
  display: 'flex',
  background: 'rgba(240, 240, 240, 0.7)',
  border: '1px solid white',
  flexDirection: 'row',
  fontWeight: 'bold',
  fontSize: 'larger',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: "50px",
  padding: '0 30px 0 30px',
  margin: '20px 0 0 0',
};

const chatLogo = {
  width: '100px',
  height: '100px',
  marginRight: '20px',
  margin: '-10px'
};

const underlineStyle = {
  width: '50%',
  height: '4px',
  backgroundColor: 'black',
  marginTop: '10px'
};

const helloStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '20px'
};

const logoStyle = {
  height: '40vmin',
  margin: '-70px -70px -50px -70px'
};

export default ChatPage;
