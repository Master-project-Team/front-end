import React from 'react';
import AccueilImage from '../assets/AccueilImage.png';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div style={AppStyle}>
      <Link to="/about-us" style={ButtonAboutStyle}>
        About Us
      </Link>
      <div style={adventureStyle}>
        Your Adventure
      </div>
      <div style={nowStyle}>
        Starts Now
      </div>
      <Link to="/chat" style={ButtonStartStyle}>
        Start Chatting
      </Link>
      <div style={textStyle}>
        <p>Découvrez notre projet, conçu par six étudiants de l'Efrei,</p>
        <p>destiné à révolutionner la planification de vos vacances</p>
        <p>pour transformer chaque escapade en un souvenir impérissable.</p>
      </div>
      <div style={footerStyle}>
        <a href="#conditions" style={linkStyle}>Condition d'utilisation</a>
        <span style={dividerStyle}>|</span>
        <a href="#privacy" style={linkStyle}>Politique de confidentialité</a>
      </div>
    </div>
  );
}

const AppStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '100vw',
  height: '100vh',
  backgroundImage: `url(${AccueilImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

const ButtonAboutStyle = {
  background: 'rgba(228, 228, 228, 0.5)',
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
  color: 'black',
  textDecoration: 'none',
};

const adventureStyle = {
  display: 'flex',
  flexDirection: 'column',
  padding: '70px 0 0 70px',
  fontFamily: 'Verdana, sans-serif',
  fontSize: '80px',
};

const nowStyle = {
  display: 'flex',
  flexDirection: 'column',
  padding: '0 0 0 70px',
  fontFamily: 'Verdana, sans-serif',
  fontSize: '80px',
};

const textStyle = {
  padding: '70px'
};

const ButtonStartStyle = {
  background: 'linear-gradient(to right, #33F0FF, #8333FF)',
  borderRadius: '50px',
  width: '150px',
  height: '50px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  color: 'white',
  margin: '-60px 0 0 550px',
  textDecoration: 'none',
};

const footerStyle = {
  width: '100%',
  textAlign: 'center',
  position: 'absolute',
  bottom: '20px',
};

const linkStyle = {
  margin: '0 10px',
  textDecoration: 'none',
  color: 'white',
};

const dividerStyle = {
  margin: '0 5px',
  color: '#666'
};

export default HomePage;
