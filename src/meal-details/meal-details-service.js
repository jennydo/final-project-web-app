import axios from "axios";

const SEARCH_URL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='

export const mealDetailsService = async (mid) => {
    const mealdbResponse = await axios.get(`${SEARCH_URL}${mid}`)
    const mongoComments = [];
    const response = {
        mealDetail: mealdbResponse.data.meals[0],
        comments: mongoComments
    }
    return response
}

export const getMealCommentsService = async (mid) => {
        const reponse = await axios.get(`$`)
}

export const postMealCommentService = async (comment) => {

}

