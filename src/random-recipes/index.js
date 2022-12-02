import React, {useEffect} from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import {useDispatch, useSelector} from "react-redux";
import {Navigate, useNavigate} from 'react-router';

import randomMealThunks from "./random-meal-thunks";
import {Link} from "react-router-dom";

const RandomRecipes = () => {

    const {recipes} = useSelector((state) => state.randomMeals)
    const dispatch = useDispatch()
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(randomMealThunks())
    }, [])
    console.log(recipes)

    return(
        <Row>
            { recipes.map( r =>

            <Col sm={'6'} md={'6'} lg="3">
                <div onClick={() => {
                    navigate('/meal/details/' + r.idMeal)
                }}>
                    <Card>
                        <Card.Img variant="top" src={r.strMealThumb} />
                        <Card.Body>
                            <Card.Title>{r.strMeal}</Card.Title>
                            <Card.Text>
                                <h5><span className="badge bg-secondary">{r.strArea}</span> <span
                                    className="badge bg-secondary">{r.strCategory}</span></h5>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                </Col>
            )}
        </Row>
    )
}

export default RandomRecipes;