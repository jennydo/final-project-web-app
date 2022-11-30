import React from 'react';
import {useParams, useSearchParams} from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const meal =
{
    "idMeal": "52930",
    "strMeal": "Pate Chinois",
    "strDrinkAlternate": null,
    "strCategory": "Beef",
    "strArea": "Canadian",
    "strInstructions": "In a large pot of salted water, cook the potatoes until they are very tender. Drain.\r\nWith a masher, coarsely crush the potatoes with at least 30 ml (2 tablespoons) of butter. With an electric mixer, purée with the milk. Season with salt and pepper. Set aside.\r\nWith the rack in the middle position, preheat the oven to 190 °C (375 °F).\r\nIn a large skillet, brown the onion in the remaining butter. Add the meat and cook until golden brown. Season with salt and pepper. Remove from the heat.\r\nLightly press the meat at the bottom of a 20-cm (8-inch) square baking dish. Cover with the corn and the mashed potatoes. Sprinkle with paprika and parsley.\r\nBake for about 30 minutes. Finish cooking under the broiler. Let cool for 10 minutes.",
    "strMealThumb": "https://www.themealdb.com/images/media/meals/yyrrxr1511816289.jpg",
    "strTags": "MainMeal,Alcoholic",
    "strYoutube": "https://www.youtube.com/watch?v=QRFqnLkEv3I",
    "strIngredient1": "Potatoes",
    "strIngredient2": "Butter",
    "strIngredient3": "Milk",
    "strIngredient4": "Minced Beef",
    "strIngredient5": "Onion",
    "strIngredient6": "Creamed Corn",
    "strIngredient7": "Paprika",
    "strIngredient8": "Parsley",
    "strIngredient9": "Salt",
    "strIngredient10": "Pepper",
    "strIngredient11": "",
    "strIngredient12": "",
    "strIngredient13": "",
    "strIngredient14": "",
    "strIngredient15": "",
    "strIngredient16": "",
    "strIngredient17": "",
    "strIngredient18": "",
    "strIngredient19": "",
    "strIngredient20": "",
    "strMeasure1": "4 cups ",
    "strMeasure2": "60ml",
    "strMeasure3": "½ cup ",
    "strMeasure4": "450g",
    "strMeasure5": "1 finely chopped ",
    "strMeasure6": "500ml",
    "strMeasure7": "to taste",
    "strMeasure8": "to taste",
    "strMeasure9": "Dash",
    "strMeasure10": "Dash",
    "strMeasure11": "",
    "strMeasure12": "",
    "strMeasure13": "",
    "strMeasure14": "",
    "strMeasure15": "",
    "strMeasure16": "",
    "strMeasure17": "",
    "strMeasure18": "",
    "strMeasure19": "",
    "strMeasure20": "",
    "strSource": "https://www.ricardocuisine.com/en/recipes/5541-pate-chinois-shepherd--s-pie-",
    "strImageSource": null,
    "strCreativeCommonsConfirmed": null,
    "dateModified": null
}

const MealDetails = () => {
    const instructions = meal.strInstructions.split("\r\n")
    const ingredientList = [20]

    return(
        <div className={'mt-3'}>

            <h1>{meal.strMeal}</h1>

            <div>

            </div>

            <Row>
                <Col sm={'12'} md={'6'}>
                    <img className={'w-100 mb-3'} alt={'Picture of '+ meal.strMeal} src={meal.strMealThumb}/>


                        <h3>Ingredients:</h3>
                        <ul>
                            { ingredientList.map(u => u.length > 2 && <li>
                            {u}
                        </li>)}
                        </ul>

                </Col>
                <Col className={'two'}>
                    <ol>
                        <h3>Instructions:</h3>
                        {
                            instructions.map(u =>
                                u.length > 2 && <li>
                                    {u}
                                </li>
                            )
                        }
                    </ol>
                </Col>
            </Row>

        </div>
    )
}

export default MealDetails;