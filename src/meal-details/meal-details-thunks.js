import {createAsyncThunk} from "@reduxjs/toolkit";
import mealDetailsService from "./meal-details-service";

export const mealDetailsThunks = createAsyncThunk(
    'RandomMealThunks',
    async (mid) => await mealDetailsService(mid)
)

export default mealDetailsService;