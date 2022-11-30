import {createAsyncThunk} from "@reduxjs/toolkit";
import {findFoodBySearchTerm} from "./search-service";

export const findFoodBySearchTermThunk = createAsyncThunk(
    'findFoodBySearchTerm',
    (term) => findFoodBySearchTerm(term)
)
