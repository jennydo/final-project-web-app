import {createAsyncThunk} from "@reduxjs/toolkit";
import {userLikesFood} from "./likes-service";

export const userLikesFoodThunk = createAsyncThunk(
    'userLikesFood',
    async (like) => {
        return await userLikesFood(like.uid, like.mid)
    }
)