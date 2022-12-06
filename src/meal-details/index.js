import React from 'react';
import {useParams} from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CommentComponent from "./comment-component";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {mealDetailsThunks} from "./meal-details-thunks";
import YoutubeEmbed from "./youtube-embed";

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

const comments = [
    {
        "username": "alice",
        "review": "good food",
        "time": "2h",
        "likes": "2",
        "liked": true,
        "dislikes": "4",
        "disliked": false
    }
]


const MealDetails = () => {
    const {meal, loading} = useSelector((state) => state.mealDetails)
    const dispatch = useDispatch()
    const {mid} = useParams();
    useEffect(() => {
        dispatch(mealDetailsThunks(mid))
    }, [])
    console.log(meal)

        const ingredientList = [20];
        ingredientList[0] = meal.strMeasure1 + " " + meal.strIngredient1;
        ingredientList[1] = meal.strMeasure2 + " " + meal.strIngredient2;
        ingredientList[2] = meal.strMeasure3 + " " + meal.strIngredient3;
        ingredientList[3] = meal.strMeasure4 + " " + meal.strIngredient4;
        ingredientList[4] = meal.strMeasure5 + " " + meal.strIngredient5;
        ingredientList[5] = meal.strMeasure6 + " " + meal.strIngredient6;
        ingredientList[6] = meal.strMeasure7 + " " + meal.strIngredient7;
        ingredientList[7] = meal.strMeasure8 + " " + meal.strIngredient8;
        ingredientList[8] = meal.strMeasure9 + " " + meal.strIngredient9;
        ingredientList[9] = meal.strMeasure10 + " " + meal.strIngredient10;
        ingredientList[10] = meal.strMeasure11 + " " + meal.strIngredient11;
        ingredientList[11] = meal.strMeasure12 + " " + meal.strIngredient12;
        ingredientList[12] = meal.strMeasure13 + " " + meal.strIngredient13;
        ingredientList[13] = meal.strMeasure14 + " " + meal.strIngredient14;
        ingredientList[14] = meal.strMeasure15 + " " + meal.strIngredient15;
        ingredientList[15] = meal.strMeasure16 + " " + meal.strIngredient16;
        ingredientList[16] = meal.strMeasure17 + " " + meal.strIngredient17;
        ingredientList[17] = meal.strMeasure18 + " " + meal.strIngredient18;
        ingredientList[18] = meal.strMeasure19 + " " + meal.strIngredient19;
        ingredientList[19] = meal.strMeasure20 + " " + meal.strIngredient20;

    //
    // console.log(comments)
    return(
        <div className={'mt-3'}>
            {
                !loading && <>
                    <h1>{meal.strMeal}</h1>

                    <h5><span className="badge bg-secondary">{meal.strArea}</span> <span
                        className="badge bg-secondary">{meal.strCategory}</span></h5>

                    <Row>
                        <Col sm={'12'} md={'6'}>
                            <img className={'w-100 mb-3'} alt={'Picture of ' + meal.strMeal} src={meal.strMealThumb}/>

                            <h3>Youtube Video:</h3>
                            {
                                meal.strYoutube &&  <YoutubeEmbed embedId={meal.strYoutube.substring(meal.strYoutube.indexOf('=') + 1)} />
                            }
                        </Col>
                        <Col>
                            <h3>Ingredients:</h3>
                            <ul>
                                {ingredientList.map(u => !u.includes('null') && u.length > 2 && <li>
                                    {u}
                                </li>)}
                            </ul>
                            <h3>Instructions:</h3>
                            <ol>
                                {
                                    typeof meal.strInstructions !== "undefined" &&
                                    meal.strInstructions.split("\r\n").map(u =>
                                            u.length > 4 && !u.toLowerCase().includes("step") && <li>
                                                {u}
                                            </li>
                                    )
                                }

                            </ol>
                        </Col>
                    </Row>

                    <hr/>

                    <h3>Comments</h3>

                    <ul className={'list-group'}>
                        {
                            comments.map(u => <CommentComponent comment={u}/>)
                        }
                    </ul>
                </>
            }
        </div>
    )
}

export default MealDetails;