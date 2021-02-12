import React from 'react';
import { BrowserRouter} from 'react-router-dom';


import Header from './components/partials/Header';
import Routes from './Routes';

// import logo from './logo.svg';
// import './App.css';


const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes/>
    </BrowserRouter>
  );
}

export default App;
