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
        setMessages([...messages, userMessage]);

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
                const updatedMessages = [...messages, { user_message: message, bot_response: data.bot_response }];
                setMessages(updatedMessages);
                setMessage('');
            })
            .catch(error => setError(error.toString()));
    };

    return (
        <div>
            <h1>Conversation {conversationId}</h1>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <div id="chat-container" style={{ maxWidth: '600px', margin: '0 auto', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', overflowY: 'auto', height: '400px' }}>
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.user_message ? 'user-message' : 'bot-message'}`} style={{ margin: '10px 0', textAlign: msg.user_message ? 'right' : 'left', color: msg.user_message ? 'blue' : 'green' }}>
                        {msg.user_message || msg.bot_response}
                    </div>
                ))}
            </div>
            <form id="chat-form" onSubmit={sendMessage}>
                <input
                    type="text"
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Entrez votre message"
                />
                <button type="submit">Envoyer</button>
            </form>
        </div>
    );
};

export default Conversation;
