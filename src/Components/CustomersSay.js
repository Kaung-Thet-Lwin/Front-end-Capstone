import React from "react";
import Testimonials from "./Testimonials";
import "../Css Files/CustomersSay.css";

function CustomersSay(){
    console.log("Testimonials Data:", Testimonials);
    return(
        <div className="customersay-heading">
            <h1>Testimonials</h1>
            <div className="customersay-container">
                {Testimonials.map((testimonials) => (
                    <div key={testimonials.id} className="customersay">
                        <img src={testimonials.rating} alt="Rating"/>
                        <div className="customersay-content">
                            <div className="customersay-header">
                                <img src={testimonials.image} alt="Person"/>
                                <span className="person-name">{testimonials.name}</span>
                            </div>
                            <p>{testimonials.review}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default CustomersSay;