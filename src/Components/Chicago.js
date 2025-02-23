import React from "react";
import Restaurant from "../assets/restaurant.jpg";
import Chef from "../assets/restaurant-chefB.jpg";
import "../Css Files/Chicago.css";

function Chicago(){
    return(
        <div className="chicago-main">
            <div className="chicago-heading">
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <div className="chicago-image-section">
                    <span className="restaurant-image"><img src={Restaurant} alt="restaurant" width="300" height="300"/></span>
                    <span className="chef-image"><img src={Chef} alt="chef" width="300" height="300"/></span>
                </div>
            </div>
            <div className="chicago-content">
                <p>Nested in the heart of Chicago, Little Lemon offers a taste of the Mediterranean with a contemporary twist.
                   Our passion for fresh ingredients and authentic flavors shines through in every dish.
                   Whether you are dining in or ordering takeout, we bring a warm and welcoming experience to every guest.
                </p>
            </div>
        </div>
    )
};

export default Chicago;