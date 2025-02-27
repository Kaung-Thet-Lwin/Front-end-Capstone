import React from 'react';
import Nav from './Components/Nav';
import Main from './Components/Main';
import OnlineMenu from './Components/OnlineMenu';
import CustomersSay from './Components/CustomersSay';
import Chicago from './Components/Chicago';
import Footer from './Components/Footer';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <React.Fragment>
      <Nav/>
      <Main/>
      <Routes>
        <Route path="/" element={
          <>
            <OnlineMenu/>
            <CustomersSay/>
            <Chicago/>
            <Footer/>
          </>
        }/>
      </Routes>
    </React.Fragment>
  );
}

export default App;
