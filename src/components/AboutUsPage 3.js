import React, { useState, useEffect } from 'react';

const AboutUsPage = () => {
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
        <div>
            <h1>Bienvenue dans l'application de chat</h1>
            <div className="conversations-list">
                <h3>Conversations:</h3>
                {conversations.map(conversationId => (
                    <a
                        key={conversationId}
                        href="#"
                        className="conversation-link"
                        onClick={() => loadConversation(conversationId)}
                    >
                        Conversation {conversationId}
                    </a>
                ))}
            </div>
            <div id="chat-container">
                {messages.map((msg, index) => (
                    <div key={index}>
                        <div className="message user-message">{msg.user_message}</div>
                        <div className="message bot-message">{msg.bot_response}</div>
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
                <input type="hidden" id="conversation_id" value={currentConversation} />
                <div className="chat-controls">
                    <button type="submit">Envoyer</button>
                    <button type="button" onClick={startNewConversation}>Nouvelle Conversation</button>
                </div>
            </form>
        </div>
    );
};


export default AboutUsPage;
