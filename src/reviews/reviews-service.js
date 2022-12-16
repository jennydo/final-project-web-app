import axios from "axios";


const FOOD_REVIEWS_API = 'http://localhost:4000/api/reviews/meal'///CHECK
const AUTHOR_REVIEWS_API = 'http://localhost:4000/api/users'

const api = axios.create({withCredentials: true});

export const createReview = async (review) => {
    console.log(review);
    const response = await api.post(`${FOOD_REVIEWS_API}/${review.idMeal}`, review)
    return response.data
}

export const updateReviewService = async (comment) => {
    const response = await api.put(`${FOOD_REVIEWS_API}/${comment._id}`, comment)
    return response.data
}

export const deleteReviewService = async (commentID) => {
    const response = await api.delete(`${FOOD_REVIEWS_API}/${commentID}`)
    return response.data
}


export const findReviewsByFood = async (idMeal) => {
    const response = await api.get(`${FOOD_REVIEWS_API}/${idMeal}`)
    return response.data
}

export const findReviewsByAuthor = async (author) => {
    const response = await api.get(`${AUTHOR_REVIEWS_API}/${author}/reviews`)
    return response.data
}