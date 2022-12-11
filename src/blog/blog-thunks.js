import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service from './blog-service'

export const createBlogThunk = createAsyncThunk(
    'createBlog',
    async (newBlog) =>
        await service.createBlog(newBlog))



