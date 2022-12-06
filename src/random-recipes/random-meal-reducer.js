import {createSlice} from "@reduxjs/toolkit";
import randomMealThunks from "./random-meal-thunks";


const initialState = {
    recipes: [],
    loading: false
}

const randomMealReducer = createSlice({
    name: 'randomMeals',
    initialState,
    extraReducers: {

        [randomMealThunks.pending]:
            (state) => {
                state.loading = true
                state.recipes = []
            },
        [randomMealThunks.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.recipes = payload
            },
    }
})

export default randomMealReducer.reducer;
