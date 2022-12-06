import {createSlice} from "@reduxjs/toolkit";
import {mealDetailsThunks} from "./meal-details-thunks";

const initialState = {
    meal: {},
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
            },
        [mealDetailsThunks.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.meal = payload[0]
            },
    }
})

export default mealDetailsReducer.reducer;
