import {createAsyncThunk} from "@reduxjs/toolkit";
import {getMealReviewsService, mealDetailsService, postMealCommentService} from "./meal-details-service";

const USER_API_URL = 'http://localhost:4000/meal'
const BASE_API_URL = 'http://localhost:4000'

export const mealDetailsThunks = createAsyncThunk(
    'mealDetailsThunks/get',
    async (mid) => await mealDetailsService(mid)
)

export const getMealReviewsThunk = createAsyncThunk(
    'meal/getComments',
    async (mid) => await getMealReviewsService(mid))

export const postMealCommentThunk = createAsyncThunk(
    'meal/postComment',
    async (comment) => await postMealCommentService(comment))

