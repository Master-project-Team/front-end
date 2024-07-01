import React from 'react';
import logo from '../assets/image.png';

const ButtonNouvChat = () => {
    return (
        <div style={Style}>
          <img src={logo} style={logoStyle} alt="logo" />
          <p>
            Bonjour comment puis-je vous aider aujourd’hui ?
          </p>
        </div>
    );
};

const Style = {
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

export default ButtonNouvChat;
