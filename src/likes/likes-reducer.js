import {createSlice} from "@reduxjs/toolkit";
import {findFoodLikedByUserThunk, userLikesFoodThunk} from "./likes-thunks";

const initialState = {
    likes: [],
    loading: false
}

export const likesReducer = createSlice({
                                            name: 'likes',
                                            initialState,
                                            extraReducers: {
                                                [userLikesFoodThunk.fulfilled]: (state, action) => {
                                                    state.likes.push(action.payload)
                                                },
                                                [findFoodLikedByUserThunk.fulfilled]: (state, {payload}) => {
                                                    state.likes = payload
                                                },
                                                [findFoodLikedByUserThunk.rejected]: (state, {payload}) => {
                                                    state.likes = []
                                                }
                                            }
                                        })