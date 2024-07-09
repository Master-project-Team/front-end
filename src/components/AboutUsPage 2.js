import React, { useState, useEffect } from 'react';
import Conversation from './Conversation.js';

const AboutUsPage = () => {
    const [conversations, setConversations] = useState([]);
    const [currentConversationId, setCurrentConversationId] = useState(null);

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
                loadConversationLinks();
            });
    };

    return (
        <div>
            <h1>Bienvenue dans l'application de chat</h1>
            <button onClick={startNewConversation}>Nouvelle Conversation</button>
            <div className="conversations-list">
                <h3>Conversations:</h3>
                {conversations.map(conversationId => (
                    <a
                        key={conversationId}
                        href="#"
                        className="conversation-link"
                        onClick={() => setCurrentConversationId(conversationId)}
                    >
                        Conversation {conversationId}
                    </a>
                ))}
            </div>
            {currentConversationId && <Conversation conversationId={currentConversationId} />}
        </div>
    );
};

export default AboutUsPage;