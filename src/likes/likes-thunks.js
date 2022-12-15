import {createAsyncThunk} from "@reduxjs/toolkit";
import {findFoodLikedByUser, userLikesFood} from "./likes-service";

export const userLikesFoodThunk = createAsyncThunk(
    'userLikesFood',
    async (like) => {
        return await userLikesFood(like.mid)
    }
)
export const findFoodLikedByUserThunk = createAsyncThunk(
    'findFoodLikedByUser',
    async (uid) => await findFoodLikedByUser(uid)
)