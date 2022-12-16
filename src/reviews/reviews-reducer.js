import {createSlice} from "@reduxjs/toolkit";
import {
    createReviewThunk,
    deleteReviewThunk,
    findReviewsByAuthorThunk,
    findReviewsByFoodThunk,
    updateReviewThunk
} from "./reviews-thunks";
import {deleteReviewService} from "./reviews-service";

const reviewsReducer = createSlice({
                                       name: 'reviews',
                                       initialState: {
                                           reviews: []
                                       },
                                       extraReducers: {
                                           [createReviewThunk.fulfilled]: (state, action) => {
                                               console.log(action.payload)
                                               state.reviews.unshift(action.payload)
                                           },
                                           [updateReviewThunk.fulfilled]: (state, action) => {
                                               const newReview = action.payload
                                               const index = state.reviews.findIndex( u => u._id === newReview._id)
                                               state.reviews[index] = newReview
                                               console.log(newReview, index);
                                           },
                                           [deleteReviewThunk.fulfilled]: (state, action) => {
                                               const deletedComment = action.payload
                                               console.log(deletedComment)
                                               state.reviews = state.reviews.filter( u => u._id !== deletedComment.reviewID)
                                           },
                                           [findReviewsByFoodThunk.fulfilled]: (state, action) => {
                                               state.reviews = action.payload
                                           },
                                           [findReviewsByAuthorThunk.fulfilled]: (state, action) => {
                                               state.reviews = action.payload
                                           }
                                       }
                                   })

export default reviewsReducer.reducer