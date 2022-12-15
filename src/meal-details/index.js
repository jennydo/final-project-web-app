import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CommentComponent from "./comment-component";
import {useDispatch, useSelector} from "react-redux";
import {mealDetailsThunks} from "./meal-details-thunks";
import YoutubeEmbed from "./youtube-embed";
import {userLikesFoodThunk} from "../likes/likes-thunks";
import {Button} from "react-bootstrap";
import {createReviewThunk} from "../reviews/reviews-thunks";

// const comments = [
//     {
//         "username": "alice",
//         "review": "good food",
//         "time": "2h",
//         "likes": "2",
//         "liked": true,
//         "dislikes": "4",
//         "disliked": false
//     }
// ]

const MealDetails = () => {
    const {currentUser} = useSelector((state) => state.users)
    let [review, setReview] = useState('');
    const {comments} = useSelector((state) => state.reviews);
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

    return (
        <div className={'mt-3'}>
            <Link to={-1} className={'text-decoration-none text-secondary'}>
                <i className="bi bi-arrow-left me-1"></i>Back
            </Link>

            {
                !loading && <>
                             <h2>{meal.strMeal}</h2>

                             <i onClick={() => {
                                 dispatch(userLikesFoodThunk(mid))
                             }} className={`${currentUser ? '' : 'd-none'} float-end bi bi-heart me-2`}></i>

                             <h5><span className="badge bg-secondary">{meal.strArea}</span> <span
                                 className="badge bg-secondary">{meal.strCategory}</span></h5>

                             <Row>
                                 <Col sm={'12'} md={'6'}>
                                     <img className={'w-100 mb-3'} alt={'Picture of ' + meal.strMeal}
                                          src={meal.strMealThumb}/>

                                     <h4>Youtube Video:</h4>
                                     {
                                         meal.strYoutube && <YoutubeEmbed
                                                             embedId={meal.strYoutube.substring(meal.strYoutube.indexOf('=') + 1)}/>
                                     }
                                 </Col>
                                 <Col>
                                     <h4>Ingredients:</h4>
                                     <ul>
                                         {ingredientList.map(u => !u.includes('null') && u.length > 2 && <li>
                                             {u}
                                         </li>)}
                                     </ul>
                                     <h4>Instructions:</h4>
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
                             <div>
                                 {currentUser && <>
                                     <span>
                                         <button className="btn btn-primary float-end mb-2 ps-3 pe-3 fw-bold"
                                                 onClick={
                                                     (newReview = {
                                                         "username": "alice",
                                                         "review": "good food",
                                                         "time": "2h",
                                                         "likes": "2",
                                                         "liked": true,
                                                         "dislikes": "4",
                                                         "disliked": false
                                                     }) => {
                                                         dispatch(createReviewThunk(newReview))}}>
                                         Review
                                     </button>

                                     <input
                                         onChange={(e) => setReview(e.target.value)}
                                         className="form-control mb-2 w-75"
                                         placeholder="review"
                                         type="text"
                                         value={review}/>

                                     </span>
                                 </>}
                             </div>

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