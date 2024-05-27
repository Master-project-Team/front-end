import React from 'react';

const ButtonAccueil = ({ currentPage, navigate }) => {
    const nextPage = currentPage === 'Home' ? 'Chat' : 'Home'; // Détermine la prochaine page
    const buttonLabel = currentPage === 'Home' ? 'Travel IA...' : 'Accueil'; // Texte du bouton basé sur la page actuelle

    return (
        <div style={buttonStyle} onClick={() => navigate(nextPage)}>
            <p style={{ color: 'black', fontWeight: 'bold' }}>{buttonLabel}</p>
        </div>
    );
};

const buttonStyle = {
    backgroundColor: '#D9D9D9',
    borderRadius: '50px',
    width: '125px',
    height: '35px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '20px',
    right: '20px',
    cursor: 'pointer'
};

export default ButtonAccueil;
