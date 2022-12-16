import React, {useEffect} from "react";
import Row from 'react-bootstrap/Row';
import {useDispatch, useSelector} from "react-redux";
import randomMealThunks from "./random-meal-thunks";
import MealCard from "../meal-card/mealCard";

const RandomRecipes = () => {

    const {recipes, loading} = useSelector((state) => state.randomMeals)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(randomMealThunks())
    }, [])
    console.log(recipes)

    return(
        <Row>
            { !loading && recipes.map( r => <MealCard meal={r}/>
            )}
        </Row>
    )
}

export default RandomRecipes;