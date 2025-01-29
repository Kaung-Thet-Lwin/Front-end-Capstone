import React from 'react';
import './App.css';
import Home from './Home';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <React.Fragment>
      <Helmet>
        <meta name="Little Lemon" content="About Little Lemon"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta property="og:type" content="App"/>
        <meta property="og:title" content="Little Lemon"/>
        <meta property="og:description" content="An app of Little Lemon Restaurant"/>
        <meta property="og:image" content="assets/Logo.svg"/>
        <meta property="og:image" content="assets/restauranfood.jpg"/>
      </Helmet>
      <Home/>
    </React.Fragment>
  );
}

export default App;
