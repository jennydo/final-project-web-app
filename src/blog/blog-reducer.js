import {createSlice} from "@reduxjs/toolkit";
import blogCreate from "./blog-create";
import {createBlogThunk} from "./blog-thunks";

const initialState = {
    blog: [],
    loading: false
}

const BlogReducer = createSlice({
    name: "blogReducer",
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
    }
})

export default BlogReducer.reducer;