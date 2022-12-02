import {createAsyncThunk} from "@reduxjs/toolkit";
import RandomMealService from "./random-meal-service";

export const RandomMealThunks = createAsyncThunk(
    'RandomMealThunks',
    async () => await RandomMealService()
)
export default RandomMealThunks;
