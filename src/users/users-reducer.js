import {createSlice} from "@reduxjs/toolkit";
import {
    findAllUsersThunk,
    findUserByIdThunk,
    loginThunk,
    logoutThunk,
    profileThunk,
    registerThunk, updateProfileThunk, updateUserThunk
} from "./users-thunk";
import {updateProfile} from "./users-service";

const usersReducer = createSlice({
                                     name: 'users',
                                     initialState: {
                                         users: [],
                                         loading: false,
                                         currentUser: null,
                                         publicProfile: null
                                     },
                                     extraReducers: {
                                         [findUserByIdThunk.fulfilled]: (state, action) => {
                                             state.publicProfile = action.payload
                                         },
                                         [logoutThunk.fulfilled]: (state, action) => {
                                             state.currentUser = null
                                         },
                                         [profileThunk.fulfilled]: (state, action) => {
                                             state.currentUser = action.payload
                                         },
                                         [registerThunk.fulfilled]: (state, action) => {
                                             state.currentUser = action.payload
                                         },
                                         [registerThunk.rejected]: (state, action) => {
                                             alert('Username already taken!')
                                         },
                                         [loginThunk.fulfilled]: (state, action) => {
                                             state.currentUser = action.payload
                                         },
                                         [loginThunk.rejected]: (state, action) => {
                                             alert('Username or password incorrect!')
                                         },
                                         [findAllUsersThunk.fulfilled]: (state, action) => {
                                             state.users = action.payload
                                             state.loading = false
                                         },
                                         [updateUserThunk.fulfilled]:
                                             (state, { payload }) => {
                                                 state.loading = false
                                                 const userNdx = state.users
                                                     .findIndex((user) => user.uid === payload.uid)
                                                 state.users[userNdx] = {
                                                     ...state.users[userNdx],
                                                     ...payload
                                                 }
                                             },
                                         [updateProfileThunk.fulfilled]:
                                             (state, { payload }) => {
                                                 state.loading = false
                                                 state.currentUser = payload
                                             },


                                     }
                                 })

export default usersReducer.reducer