import React from 'react';
import AccueilImage from '../assets/AccueilImage.png';

function HomePage() {

  return (
    <div style={AppStyle}>
      <img src={AccueilImage} style={imgStyle} alt="AccueilImage" />
      <div style={partieDroiteStyle}>
        <div style={TravelIAStyle}>
          <h1>Travel IA</h1>
          <p>Commencer votre voyage de la meilleure manière possible</p>
        </div>
        <div style={textStyle}>
          <h3>Texte explicatif :</h3>
          <br />
          <p>Post quorum necem nihilo lenius ferociens Gallus ut leo cadaveribus pastus multa huius modi scrutabatur. quae singula narrare non refert, me professione modum, quod evitandum est, excedamus.</p>
          <br />
          <p>Quare talis improborum consensio non modo excusatione amicitiae tegenda non est sed potius supplicio omni vindicanda est, ut ne quis concessum putet amicum vel bellum patriae inferentem sequi; quod quidem, ut res ire coepit, haud scio an aliquando futurum si</p>
          <br />
          <p>Oportunum est, ut arbitror, explanare nunc causam, quae ad exitium praecipitem Aginatium inpulit iam inde a priscis maioribus nobilem, ut locuta est pertinacior fam</p>
        </div>
        <div style={footerStyle}>
          <a href="#conditions" style={linkStyle}>Condition d'utilisation</a>
          <span style={dividerStyle}>|</span>
          <a href="#privacy" style={linkStyle}>Politique de confidentialité</a>
        </div>
      </div>
    </div>
  );
}

const AppStyle = {
  display: 'flex',
  flexDirection: 'row',
  minHeight: '100vh',
  fontSize: '20px'
};

const partieDroiteStyle = {
  alignItems: 'center',
  justifyContent: 'center'
};

const imgStyle = {
  width: '45%',
};

const TravelIAStyle = {
  textAlign: 'center',
  padding: '20px'
};

const textStyle = {
  padding: '20px'
};

const footerStyle = {
  width: '100%',
  textAlign: 'center',
  padding: '20px 0',
};

const linkStyle = {
  margin: '0 10px',
  textDecoration: 'none',
  color: '#333'
};

const dividerStyle = {
  margin: '0 5px',
  color: '#666'
};


export default HomePage;
