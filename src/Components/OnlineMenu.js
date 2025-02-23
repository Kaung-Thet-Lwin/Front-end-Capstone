import React from "react";
import Recipes from "./Recipes";
import "../Css Files/Menu.css";

function OnlineMenu(){
    return(
        <div className="menu">
            <div className="Menuheader">
                <h1>This weeks specials!</h1>
                <button aria-label="On CLick">Online Menu</button>
            </div>
            <div className="menu-items-container">
                {Recipes.map((recipe) => (
                    <div key={recipe.id} className="menu-items">
                        <img src={recipe.image} alt={recipe.title}/>
                        <div className="menu-content">
                            <div className="menu-heading">
                                <h3>{recipe.title}</h3>
                                <span className="price">{recipe.price}</span>
                            </div>
                            <p>{recipe.description}</p>
                            <button className="orderbtn">Order a Delivery</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OnlineMenu;