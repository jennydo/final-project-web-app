import {createSlice} from "@reduxjs/toolkit";
import {mealDetailsThunks} from "./meal-details-thunks";

const initialState = {
    meal: {},
    comments : [],
    loading: false
}


const  mealDetailsReducer = createSlice({
    name: 'mealDetails',
    initialState,
    extraReducers: {

        [mealDetailsThunks.pending]:
            (state) => {
                state.loading = true
                state.meal = {}
                state.comments = {}
            },
        [mealDetailsThunks.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.meal = payload.mealDetail
                state.comments = payload.comments

            },
    }
})

export default mealDetailsReducer.reducer;
