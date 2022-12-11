import {createSlice} from "@reduxjs/toolkit";
import {createBlogThunk, getAllBlogsThunk, getBlogDetailsThunk} from "./blog-thunks";

const initialState = {
    blog: [],
    blogById: [],
    loading: false
}

const BlogReducer = createSlice({
    name: 'blog',
    initialState,
    extraReducers: {
        [createBlogThunk.pending]:
            (state) => {
                state.loading = true
            },
        [createBlogThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.blog = payload[0]
            },
        [getAllBlogsThunk.pending]:
            (state) => {
                state.loading = true
            },
        [getAllBlogsThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.blog = payload
            },
        [getBlogDetailsThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false
                state.blogById = payload
            },
        [getBlogDetailsThunk.rejected]:
            (state, payload) => {
            alert('not found!')
            },
    }
})

export default BlogReducer.reducer;