import {createSlice} from "@reduxjs/toolkit";
import {findAllUsersThunk, loginThunk, logoutThunk, profileThunk, registerThunk} from "./users-thunk";

const usersReducer = createSlice({
                                     name: 'users',
                                     initialState: {
                                         users: [],
                                         loading: false,
                                         currentUser: null
                                     },
                                     extraReducers: {
                                         [logoutThunk.fulfilled]: (state, action) => {
                                             state.currentUser = null
                                         },
                                         [profileThunk.fulfilled]: (state, action) => {
                                             state.currentUser = action.payload
                                         },
                                         [registerThunk.fulfilled]: (state, action) => {
                                             state.currentUser = action.payload
                                         },
                                         [loginThunk.fulfilled]: (state, action) => {
                                             state.currentUser = action.payload
                                         },
                                         [findAllUsersThunk.fulfilled]: (state, action) => {
                                             state.users = action.payload
                                             state.loading = false
                                         }
                                     }
                                 })

export default usersReducer.reducer