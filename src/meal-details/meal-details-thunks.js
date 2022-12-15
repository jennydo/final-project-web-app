import {createAsyncThunk} from "@reduxjs/toolkit";
import {getMealCommentsService, mealDetailsService, postMealCommentService} from "./meal-details-service";

const USER_API_URL = 'http://localhost:4000/meal'
const BASE_API_URL = 'http://localhost:4000'

export const mealDetailsThunks = createAsyncThunk(
    'RandomMealThunks',
    async (mid) => await mealDetailsService(mid)
)

export const getMealCommentsThunk = createAsyncThunk(
    'meal/getComments',
    async (mid) => await getMealCommentsService(mid))

export const postMealCommentThunk = createAsyncThunk(
    'meal/postComment',
    async (comment) => await postMealCommentService(comment))

