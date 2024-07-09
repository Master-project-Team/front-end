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
        <div style={personnaliteStyle}>
          <img src={Mathis} alt="Mathis" style={pictureStyle} />
          <div style={BoxStyle}>
            <h3>Mathis</h3>
            Âge : 22 ans <br /><br />
            Formation : Ingénieur du Numérique <br /><br />
            Ville : Paris <br /><br />
            Activité extra: Sport (Volley-Ball) <br /><br />
            <br />
            « Je veux travailler dans la bonne humeur. » <br />
            « Je veux être fier de ce qu’on produit. »
          </div>
        </div>
        <div style={personnaliteStyle}>
          <img src={Matteo} alt="Matteo" style={pictureStyle} />
          <div style={BoxStyle}>
            <h3>Matteo</h3>
            Âge : 21 ans <br /><br />
            Formation : Ingénieur du Numérique <br /><br />
            Ville : Paris <br /><br />
            Activité extra: sport (Basket-ball) <br /><br />
            <br />
            « Travailler dans une ambiance sociable et motivée.» <br />
          </div>
        </div>
        <div style={personnaliteStyle}>
          <img src={Luis} alt="Luis" style={pictureStyle} />
          <div style={BoxStyle}>
            <h3>Luis</h3>
            Âge : 22 ans <br /><br />
            Formation : Ingénieur du Numérique <br /><br />
            Ville : Paris <br /><br />
            Activité extra: Sport (callisthénie) <br /><br />
            <br />
            « Je veux créer le meilleur partenaire de voyage conversationnel »<br />
          </div>
        </div>
        <div style={personnaliteStyle}>
          <img src={Gabriel} alt="Gabriel" style={pictureStyle} />
          <div style={BoxStyle}>
            <h3>Gabriel</h3>
            Âge : 22 ans <br /><br />
            Formation : Ingénieur du Numérique <br /><br />
            Ville : Paris <br /><br />
            Activité extra: Sport (Volley-Ball) <br /><br />
            <br />
            « Je veux voir jusqu’où on peut porter ce projet»<br />
            « J’ai confiance en mon équipe»<br />
          </div>
        </div>
        <div style={personnaliteStyle}>
          <img src={Gabin} alt="Gabin" style={pictureStyle} />
          <div style={BoxStyle}>
            <h3>Gabin</h3>
            Âge : 22 ans <br /><br />
            Formation : Data Ingénieur <br /><br />
            Ville : Paris <br /><br />
            Activité extra: Sport (Rugby) <br /><br />
            <br />
            « L'ingénieur doit être au service de la société »<br />
            « Il faut prendre plaisir dans chaque tâches qu’on entreprend»<br />
          </div>
        </div>
        <div style={personnaliteStyle}>
          <img src={Emerick} alt="Emerick" style={pictureStyle} />
          <div style={BoxStyle}>
            <h3>Emerick</h3>
            Âge : 21 ans <br /><br />
            Formation : Data & IA <br /><br />
            Ville : Vitry sur Seine <br /><br />
            Activité extra: voyages, sport (musculation) <br /><br />
            <br />
            « Aimant beaucoup voyager, j’aimerais développer un outil util et efficace qui me permettrait de rendre mes voyages plus agréables»<br />
          </div>
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
  margin: '70px 0 50px 100px',
};

const bodyStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
};

const personnaliteStyle = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
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
  justifyContent: 'center',
  backgroundColor: 'rgba(255, 255, 255, 0.7)',
  borderRadius: '50px',
  padding: '20px',
  margin: '20px',
  width: '150px',
};

const pictureStyle = {
  width: '130px',
  height: '130px',
  borderRadius: '50%',
};

export default AboutUsPage;
