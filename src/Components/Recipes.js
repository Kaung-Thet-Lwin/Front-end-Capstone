import Greeksalad from "../assets/greek-salad.jpg";
import Bruchetta from "../assets/bruchetta.svg";
import Lemondessert from "../assets/lemon-dessert.jpg";

const Recipes = [
    {
        id : 1,
        title : "Greek salad",
        price : "$12.99",
        image : Greeksalad,
        description : "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    },
    {
        id : 2,
        title : "Bruchetta",
        price : "$5.99",
        image : Bruchetta,
        description : "Our Bruchetta is made from grilled bread that has been smeared with a savory blend of garlic and seasoned with salt and olive oil.",
    },
    {
        id : 3,
        title : "Lemon Dessert",
        price : "$5.00",
        image : Lemondessert,
        description : "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    },
]

export default Recipes;