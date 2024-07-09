import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import bar_chat from '../assets/bar_chat.png';
import logo from '../assets/image.png';

function ChatPage() {
  const [conversations, setConversations] = useState([]);
  const [currentConversation, setCurrentConversation] = useState(null);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    loadConversationLinks();
}, []);

const loadConversationLinks = () => {
    fetch('https://travel-mate-2.azurewebsites.net/conversation_links')
        .then(response => response.json())
        .then(data => setConversations(data));
};

const loadConversation = (conversationId) => {
    fetch(`https://travel-mate-2.azurewebsites.net/conversation/${conversationId}`)
        .then(response => response.json())
        .then(data => {
            setMessages(data);
            setCurrentConversation(conversationId);
        });
};

const startNewConversation = () => {
    fetch('https://travel-mate-2.azurewebsites.net/new_conversation', { method: 'POST' })
        .then(response => response.json())
        .then(data => {
            setCurrentConversation(data.conversation_id);
            setMessages([]);
            loadConversationLinks();
        });
};

const sendMessage = (e) => {
    e.preventDefault();
    if (message.trim() === '') return;

    const userMessage = { user_message: message, bot_response: '' };
    setMessages([...messages, userMessage]);

    fetch('https://travel-mate-2.azurewebsites.net/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: message, conversation_id: currentConversation })
    })
        .then(response => response.json())
        .then(data => {
            const updatedMessages = [...messages, { user_message: message, bot_response: data.bot_response }];
            setMessages(updatedMessages);
            setMessage('');
            setCurrentConversation(data.conversation_id);
        });
};

  return (
    <div style={AppStyle}>
      <Link to="/" style={ButtonAccueilStyle}>
        Accueil
      </Link>
      <div style={historiqueStyle}>
        <div style={buttonContainerStyle}>
            <div style={buttonStyle} onClick={startNewConversation}>
                <img src={logo} style={chatLogo} alt="logo" />
                <p>Nouveau chat</p>
            </div>
            <div style={underlineStyle}></div>
        </div>
        <div style={discutionStyle}>
          {conversations.map((conversation_id, index) => (
            <Link to={`/chat/${conversation_id}`} key={index} style={conversationStyle}>
              Conversation {conversation_id}
            </Link>
          ))}
        </div>
        <div style={discutionStyle}>
          <div style={destinationStyle}>Monaco</div>
          <div style={destinationStyle}>Venezuela</div>
          <div style={destinationStyle}>New York</div>
          <div style={destinationStyle}>Essaouira</div>
          <div style={destinationStyle}>Tokyo</div>
        </div>
      </div>
      <div style={mainStyle}>
        <div style={helloStyle}>
            <img src={logo} style={logoStyle} alt="logo" />
            <p>
              Bonjour comment puis-je vous aider aujourd’hui ?
            </p>
          </div>
        <div style={messageStyle}>
          Je me trouve a Osaka donne moi une bonne adresse de restaurant pas trop chere pour manger avec mes enfants.
        </div>
        <div style={MessageIAStyle}>
          Okonomiyaki Chitose est un choix populaire parmi les locaux et les visiteurs. Ce restaurant convivial est réputé pour ses okonomiyaki délicieux et à prix raisonnable. Il est situé dans le quartier animé de Namba, ce qui le rend facile d'accès après une journée de visites.
        </div>
        <div style={messsageBoxStyle}>
          <p>Message à TravelIA...</p>
        </div>
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

const discutionStyle = {
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

const conversationStyle = {
  margin: '10px 0',
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  width: '200px',
  textAlign: 'center',
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
  marginTop: "10px",
  marginLeft: "15px",
  marginRight: "15px",
  paddingLeft: '10px',
  paddingRight: '10px'
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
  marginTop: '30vmin'
};

const logoStyle = {
  height: '40vmin',
  margin: '-70px -70px -50px -70px'
};

const messageStyle = {
  backgroundColor: '#D9D9D9',
  borderRadius: '25px',
  display: 'flex',
  justifyContent: 'center',
  position: 'absolute',
  right: '20px',
  top: '550px',
  padding: '10px',
};

const MessageIAStyle = {
  backgroundColor: '#878BCB',
  borderRadius: '25px',
  display: 'flex',
  justifyContent: 'center',
  position: 'absolute',
  left: '305px',
  top: '600px',
  padding: '10px',
  // max width
  width: 'calc(10px + 100vmin)',
};

const messsageBoxStyle = {
  backgroundColor: '#D9D9D9',
  borderRadius: '50px',
  width: 'calc(10px + 100vmin)',
  display: 'flex',
  justifyContent: 'center',
  color: '#8C8282',
  position: 'absolute',
  bottom: '20px',
};

export default ChatPage;
