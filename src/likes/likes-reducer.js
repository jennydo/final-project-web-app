import {createSlice} from "@reduxjs/toolkit";
import {userLikesFoodThunk} from "./likes-thunks";

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
                                                }
                                            }
                                        })