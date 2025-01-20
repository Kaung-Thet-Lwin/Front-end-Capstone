import {Routes, Route, Link} from 'react-router-dom';
import React from 'react';
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import Menu from './Nav/Menu';
import About from './Nav/About';
import OrderOnline from './Nav/OrderOnline';
import Login from './Nav/Login';
import './App.css';
import Logo from './assets/Logo.svg';

function Nav(){
    return(
        <React.Fragment>
            <nav className='navBar'>
                <img src ={Logo} alt="Logo"/>
                <Link to="/" className="nav-item">Home</Link>
                <Link to="/about" className="nav-item">About</Link>
                <Link to="/menu" className="nav-item">Menu</Link>
                <Link to="/bookingpage" className="nav-item">BookingPage</Link>
                <Link to="/orderonline" className="nav-item">OrderOnline</Link>
                <Link to="/login" className="nav-item">Login</Link>
            </nav>
            <Routes>
                <Route path="/" element={<HomePage/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/menu" element={<Menu/>}></Route>
                <Route path="/bookingpage" element={<BookingPage/>}></Route>
                <Route path="/orderonline" element={<OrderOnline/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
            </Routes>
        </React.Fragment>
    )
}

export default Nav;