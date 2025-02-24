import React from "react";
import Footerlogo from "../assets/footerlogo.png";
import { Link } from "react-router-dom";
import "../Css Files/Footer.css";

function Footer(){
    return(
        <footer className="footer">
            <div className="footer-container">
                <img src={Footerlogo} alt="footerlogo" height="400px" width="200px"/>
                <div className="footer-nav">
                    <h3 className="footer-title">Navigation</h3>
                    <Link to="/" className="footer-item">Home</Link>
                    <Link to="/about" className="footer-item">About</Link>
                    <Link to="/menu" className="footer-item">Menu</Link>
                    <Link to="/bookingpage" className="footer-item">Booking</Link>
                    <Link to="/orderonline" className="footer-item">OrderOnline</Link>
                    <Link to="/login" className="footer-item">Login</Link>
                </div>
            </div>
            <div className="footer-contact">
                <h3 className="footer-title">Contact</h3>
                <p className="footer-item">Address : 123 Street, Chicago</p>
                <p className="footer-item">Phone : +00-123-456</p>
                <p className="footer-item">Email : littlelemon@gmail.com</p>
            </div>
            <div className="footer-socialmedialinks">
                <h3 className="footer-title">Social Media Links</h3>
                <a className="footer-item" href="https://facebook.com" target="_blank" rel="noopener noreferrer">FaceBook</a>
                <a className="footer-item" href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a className="footer-item" href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>

            </div>
        </footer>
    )
};

export default Footer;