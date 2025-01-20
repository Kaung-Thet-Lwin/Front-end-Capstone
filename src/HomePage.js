import React from "react";
import './App.css';
import HeadLogo from './assets/Logo.svg';
import Restaurantfood from './assets/restauranfood.jpg';

function HomePage(){
    return(
        <div className="HomePage">
            <React.Fragment>
                <span className="Text-section">
                    <img className="Headlogo" src={HeadLogo} alt="HeadLogo"/>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned<br/>
                       Mediterranean restaurant,<br/>
                       focused on traditional<br/>
                       recipes served with a modern<br/>
                       twist
                    </p>
                    <button>Reserve a table</button>
                </span>
                <span className="Image-section">
                    <img className="Restaurant" height={500} src={Restaurantfood} alt="Restaurantfood"/>
                </span>
            </React.Fragment>
        </div>
    );
}

export default HomePage;