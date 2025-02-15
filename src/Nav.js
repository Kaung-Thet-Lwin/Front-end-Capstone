import {Routes, Route, Link} from 'react-router-dom';
import React from 'react';
//import Header from './Header';
//import Menu from './Nav/Menu';
//import About from './Nav/About';
//import OrderOnline from './Nav/OrderOnline';
//import Login from './Nav/Login';
//import './App.css';
import Logo from './assets/Logo.svg';
//import BookingPage from './BookingPage';

function Nav(){
    return(
        <React.Fragment>
            <nav className='navBar'>
                <img src ={Logo} alt="Logo"/>
                <Link to="/" className="nav-item">Home</Link>
                <Link to="/about" className="nav-item">About</Link>
                <Link to="/menu" className="nav-item">Menu</Link>
                <Link to="/bookingpage" className="nav-item">Booking</Link>
                <Link to="/orderonline" className="nav-item">OrderOnline</Link>
                <Link to="/login" className="nav-item">Login</Link>
            </nav>
            <Routes>
                <Route path="*"/>
                <Route path="/about"/>
                <Route path="/menu"/>
                <Route path="/bookingpage"/>
                <Route path="/orderonline"/>
                <Route path="/login"/>
            </Routes>
        </React.Fragment>
    )
}

export default Nav;