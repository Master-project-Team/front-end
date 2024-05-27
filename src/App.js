import React from 'react';
import './App.css';
import ChatPage from './components/ChatPage';
import HomePage from './components/HomePage';
import ButtonAccueil from './components/ButtonAccueil';

function App() {
  const [currentPage, setCurrentPage] = React.useState('Home');

  const navigate = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <ButtonAccueil currentPage={currentPage} navigate={navigate} />
      {currentPage === 'Home' ? <HomePage /> : <ChatPage />}
    </div>
  );
}

export default App;
