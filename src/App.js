import React from 'react';
import './App.css';
import Home from './Home';

function App() {
  return (
    <React.Fragment>
      <header>
        <meta name="Little Lemon" content="About Little Lemon"/>
        <meta name="og:title" content="Little Lemon"/>
        <meta name="og:description" content="An app of Little Lemon Restaurant"/>
        <meta name="og:image" content="assets/Logo.svg"/>
        <meta name="og:image" content="assets/restauranfood.jpg"/>
      </header>
      <Home/>
    </React.Fragment>
  );
}

export default App;
