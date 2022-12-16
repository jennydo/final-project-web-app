import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service from './blog-service'
import {deleteBlog} from "./blog-service";

export const createBlogThunk = createAsyncThunk(
    'createBlog',
    async (newBlog) =>
        await service.createBlog(newBlog));

export const getAllBlogsThunk = createAsyncThunk(
    'getAllBlogs',
    async () =>
        await service.getAllBlogs());

export const getBlogDetailsThunk = createAsyncThunk(
    'getBlogDetails',
    async (bid) =>
        await service.getBlogDetails(bid));



export const deleteBlogThunk = createAsyncThunk(
    'deleteBlog',
    (mid) => deleteBlog(mid)
)


export const updateMovieThunk = {}

