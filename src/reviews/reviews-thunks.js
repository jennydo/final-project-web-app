import {createAsyncThunk} from "@reduxjs/toolkit";
import {
    createReview,
    deleteReviewService,
    findReviewsByAuthor,
    findReviewsByFood,
    updateReviewService
} from "./reviews-service";

export const createReviewThunk = createAsyncThunk(
    'createReviewThunk',
    async (review) => createReview(review)
)

export const updateReviewThunk = createAsyncThunk(
    'updateReviewThunk',
    async (comment) => updateReviewService(comment)
)
export const findReviewsByFoodThunk = createAsyncThunk(
    'findReviewsByFoodThunk',
    async (idMeal) => findReviewsByFood(idMeal)

)
export const findReviewsByAuthorThunk = createAsyncThunk(
    'findReviewsByAuthorThunk',
    async (author) => findReviewsByAuthor(author)
)

export const deleteReviewThunk = createAsyncThunk(
    'deleteReviewCommentThunk',
    async (reviewID) => deleteReviewService(reviewID)
)

