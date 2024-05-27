import React from 'react';
import logo from '../assets/image.png';

const ButtonNouvChat = () => {
    return (
        <div style={buttonContainerStyle}>
            <div style={buttonStyle}>
                <img src={logo} style={chatLogo} alt="logo" />
                <p>Nouveau chat</p>
            </div>
            <div style={underlineStyle}></div>
        </div>
    );
};

const buttonContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
};

const buttonStyle = {
    display: 'flex',
    backgroundColor: "#F0F0F0",
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
    width: '30px',
    height: '30px',
    marginRight: '20px'
};

const underlineStyle = {
    width: '50%',
    height: '4px',
    backgroundColor: 'black',
    marginTop: '10px'
};

export default ButtonNouvChat;
