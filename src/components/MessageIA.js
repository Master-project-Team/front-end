import React from 'react';

const ChatBox = () => {
    return (
      <div style={Style}>
        Okonomiyaki Chitose est un choix populaire parmi les locaux et les visiteurs. Ce restaurant convivial est réputé pour ses okonomiyaki délicieux et à prix raisonnable. Il est situé dans le quartier animé de Namba, ce qui le rend facile d'accès après une journée de visites.
      </div>
    );
};

const Style = {
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

export default ChatBox;
