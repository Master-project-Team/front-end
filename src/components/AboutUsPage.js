import React from 'react';
import AboutUsImage from '../assets/AboutUsImage.png';
import { Link } from 'react-router-dom';
import Mathis from '../assets/Mathis.png';
import Emerick from '../assets/Emerick.png';
import Gabin from '../assets/Gabin.png';
import Luis from '../assets/Luis.png';
import Gabriel from '../assets/Gabriel.png';
import Matteo from '../assets/Matteo.png';

function AboutUsPage() {

  return (
    <div style={AppStyle}>
      <Link to="/" style={ButtonAccueilStyle}>
        Accueil
      </Link>
      <h1 style={h1Style}>About Us</h1>
      <div style={bodyStyle}>
        <div style={BoxStyle}>
          <img src={Mathis} alt="Mathis" style={pictureStyle} />
          <p>Mathis</p>
        </div>
        <div style={BoxStyle}>
          <img src={Matteo} alt="Matteo" style={pictureStyle} />
          <p>Matteo</p>
        </div>
        <div style={BoxStyle}>
          <img src={Luis} alt="Luis" style={pictureStyle} />
          <p>Luis</p>
        </div>
        <div style={BoxStyle}>
          <img src={Gabriel} alt="Gabriel" style={pictureStyle} />
          <p>Gabriel</p>
        </div>
        <div style={BoxStyle}>
          <img src={Gabin} alt="Gabin" style={pictureStyle} />
          <p>Gabin</p>
        </div>
        <div style={BoxStyle}>
          <img src={Emerick} alt="Emerick" style={pictureStyle} />
          <p>Emerick</p>
        </div>
      </div>
    </div>
  );
}

const AppStyle = {
  backgroundImage: `url(${AboutUsImage})`,
  backgroundSize: 'cover',
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
};

const h1Style = {
  fontSize: '50px',
  fontWeight: 'bold',
  color: 'black',
  margin: '100px 0 0 100px',
};

const bodyStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  // margin: 'top right bottom left',
  padding: '50px 0 0 0',
};

const ButtonAccueilStyle = {
  background: 'linear-gradient(to right, #33F0FF, #8333FF)',
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

const BoxStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(255, 255, 255, 0.7)',
  borderRadius: '50px',
  padding: '20px',
  margin: '20px',
  flexDirection: 'column',
};

const pictureStyle = {
  width: '130px',
  height: '130px',
  borderRadius: '50%',
};

export default AboutUsPage;
