
import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {useDispatch, useSelector} from "react-redux";
import {mealDetailsThunks} from "./meal-details-thunks";
import YoutubeEmbed from "./youtube-embed";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import {parseTime} from "../blog/parseTime";
//
// const comments = [{
//     "username": "alice",
//     "userId" : 1234,
//     "comment": "good food",
//     "time": "2h"
// }]
// const MealDetails = () => {
//     const {currentUser} = useSelector((state) => state.users)
//     const {meal, comments, loading} = useSelector((state) => state.mealDetails)
// =======
import {userLikesFoodThunk} from "../likes/likes-thunks";
import {useNavigate} from "react-router";

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
    const {currentUser} = useSelector((state) => state.users)
    const {meal, loading} = useSelector((state) => state.mealDetails)
    const dispatch = useDispatch()
    const {mid} = useParams();
    const navigate = useNavigate();
    const [comment, setComment] = useState('');

    useEffect(() => {
        dispatch(mealDetailsThunks(mid))
    }, [])

    const postMealComment = () => {
        //dispatch(postMealCommentThunk(comment))
    }

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
            <div className={'mb-2'}>
            <Link to={-1} className={'text-decoration-none text-secondary'}>
                <i className="bi bi-arrow-left me-1"></i>Back
            </Link>
            </div>
            {
                !loading && <>

                    <h2>{meal.strMeal}</h2>
                    <i onClick={() => {dispatch(userLikesFoodThunk(mid))}}
                       className={`${currentUser ? '' : 'd-none'} float-end bi bi-heart me-2`}></i>
                    <h5><span className="badge bg-secondary">{meal.strArea}</span> <span
                        className="badge bg-secondary">{meal.strCategory}</span></h5>

                    <Row>
                        <Col sm={'12'} md={'6'}>
                            <img className={'w-100 mb-3'} alt={'Picture of ' + meal.strMeal} src={meal.strMealThumb}/>

                            <h4>Youtube Video:</h4>
                            {
                                meal.strYoutube &&  <YoutubeEmbed embedId={meal.strYoutube.substring(meal.strYoutube.indexOf('=') + 1)} />
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

                    <h4>Comments<span className={'text-secondary'}><i className="bi bi-dot"></i>{comments.length}</span></h4>



                    <ul className={'list-group mb-3'}>
                        <li className={'list-group-item'}>
                            {
                                currentUser ?
                                    <Form>
                                        <Form.Group className={'mb-2'}>
                                            <FloatingLabel controlId="floatingTextarea2" label="Leave a comment here">
                                                <Form.Control
                                                    as="textarea"
                                                    placeholder="Leave a comment here"
                                                    value={comment}
                                                    onChange={(event) => setComment(event.target.value)}
                                                    style={{ height: '6rem' }}
                                                />
                                            </FloatingLabel>
                                            <Form.Text>
                                                Logged in as {currentUser.username}.
                                            </Form.Text>
                                        </Form.Group>


                                        <Button variant="primary" onClick={() => postMealComment()} disabled={comment === ''}>Post Comment</Button>
                                    </Form>
                                    :
                                    <Alert  variant={'warning'} className={'mb-3'}>
                                        Please login to comment.
                                    </Alert>
                            }
                        </li>
                        {
                            comments.map(u =>
                                <li className={'list-group-item'}>
                                    <span className={'fw-bold'}>Wrote by <Link className={'text-black'} to={'/'}>{u.username}</Link></span>
                                    <span><i className="bi bi-dot"></i>{parseTime(new Date())}</span>
                                    <p>{u.comment}</p>
                            </li>)
                        }
                    </ul>
                </>
                         //     <h2>{meal.strMeal}</h2>
                         //
                         //     <i onClick={() => {
                         //         dispatch(userLikesFoodThunk(mid))
                         //     }} className={`${currentUser ? '' : 'd-none'} float-end bi bi-heart me-2`}></i>
                         //
                         //     <h5><span className="badge bg-secondary">{meal.strArea}</span> <span
                         //         className="badge bg-secondary">{meal.strCategory}</span></h5>
                         //
                         //     <Row>
                         //         <Col sm={'12'} md={'6'}>
                         //             <img className={'w-100 mb-3'} alt={'Picture of ' + meal.strMeal}
                         //                  src={meal.strMealThumb}/>
                         //
                         //             <h4>Youtube Video:</h4>
                         //             {
                         //                 meal.strYoutube && <YoutubeEmbed
                         //                                     embedId={meal.strYoutube.substring(meal.strYoutube.indexOf('=') + 1)}/>
                         //             }
                         //         </Col>
                         //         <Col>
                         //             <h4>Ingredients:</h4>
                         //             <ul>
                         //                 {ingredientList.map(u => !u.includes('null') && u.length > 2 && <li>
                         //                     {u}
                         //                 </li>)}
                         //             </ul>
                         //             <h4>Instructions:</h4>
                         //             <ol>
                         //                 {
                         //                     typeof meal.strInstructions !== "undefined" &&
                         //                     meal.strInstructions.split("\r\n").map(u =>
                         //                     u.length > 4 && !u.toLowerCase().includes("step") && <li>
                         //                         {u}
                         //                     </li>
                         //                     )
                         //                 }
                         //
                         //             </ol>
                         //         </Col>
                         //     </Row>
                         //
                         //     <hr/>
                         //
                         //     <h3>Comments</h3>
                         //
                         //     {currentUser && <>
                         //     <Button onClick={() => navigate('create')}>Create</Button>
                         //     </>}
                         //
                         //     <ul className={'list-group'}>
                         //         {
                         //             comments.map(u => <CommentComponent comment={u}/>)
                         //         }
                         //     </ul>
                         //
                         // </>
            }
        </div>
    )
}

export default MealDetails;