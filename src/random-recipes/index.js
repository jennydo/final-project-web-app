import React, {useEffect} from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import {useDispatch, useSelector} from "react-redux";
import {Navigate, useNavigate} from 'react-router';

import randomMealThunks from "./random-meal-thunks";
import {Link} from "react-router-dom";
import MealCard from "../meal-card/mealCard";

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
            { recipes.map( r => <MealCard meal={r}/>
            )}
        </Row>
    )
}

export default RandomRecipes;