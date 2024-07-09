import React, { useState, useEffect } from 'react';

const Conversation = ({ conversationId }) => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://travel-mate-2.azurewebsites.net/conversation/${conversationId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setMessages(data))
            .catch(error => setError(error.toString()));
    }, [conversationId]);

    const sendMessage = (e) => {
        e.preventDefault();
        if (message.trim() === '') return;

        const userMessage = { user_message: message, bot_response: '' };
        setMessages(prevMessages => [...prevMessages, userMessage]);

        fetch('https://travel-mate-2.azurewebsites.net/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: message, conversation_id: conversationId })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setMessages(prevMessages => {
                    const updatedMessages = [...prevMessages];
                    updatedMessages[updatedMessages.length - 1].bot_response = data.bot_response;
                    return updatedMessages;
                });
                setMessage('');
            })
            .catch(error => setError(error.toString()));
    };

    return (
        <div>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <div id="chat-container" style={{ maxWidth: '1100px', padding: '10px', overflowY: 'auto', height: '300px' }}>
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.user_message ? 'user-message' : 'bot-message'}`} >
                        {msg.user_message && <div style={messageStyle}>{msg.user_message}</div>}
                        {msg.bot_response && <div style={messageIAStyle}>{msg.bot_response}</div>}
                    </div>
                ))}
            </div>
            <form id="chat-form" onSubmit={sendMessage} style={messsageBoxStyle}>
                <input
                    type="text"
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Message à TravelIA..."
                    style={inputStyle}
                />
                <button type="submit" style={buttonStyle}>Envoyer</button>
            </form>
        </div>
    );
};

const messageStyle = {
    backgroundColor: '#D9D9D9',
    padding: '10px',
    borderRadius: '25px',
    margin: '10px 0',
    color: 'black',
    textAlign: 'right',
    maxWidth: '80%',
    marginLeft: 'auto',
  };
  
const messageIAStyle = {
    backgroundColor: '#878BCB',
    padding: '10px',
    borderRadius: '25px',
    margin: '10px 0',
    color: 'black',
    textAlign: 'left',
    maxWidth: '80%',
};  

const messsageBoxStyle = {
    backgroundColor: '#D9D9D9',
    borderRadius: '50px',
    width: '70%',
    display: 'flex',
    justifyContent: 'center',
    color: '#8C8282',
    position: 'absolute',
    bottom: '20px',
    right: '70px',
  };

  const inputStyle = {
    border: 'none',
    borderRadius: '25px',
    padding: '10px',
    flexGrow: 1,
    fontSize: '16px',
    backgroundColor: '#D9D9D9',
  };

    const buttonStyle = {
        borderRadius: '25px',
        padding: '10px 15px',
        border: 'none',
        color: 'white',
        cursor: 'pointer',
    };

export default Conversation;
