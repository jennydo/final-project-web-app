import axios from "axios";

const SEARCH_URL = 'https://www.themealdb.com/api/json/v1/1/random.php'

const RandomMealService = async () => {

    const response1 = await axios.get(`${SEARCH_URL}`)
    const response2 = await axios.get(`${SEARCH_URL}`)
    const response3 = await axios.get(`${SEARCH_URL}`)
    const response4 = await axios.get(`${SEARCH_URL}`)
    return [...response1.data.meals, ...response2.data.meals, ...response3.data.meals, ...response4.data.meals]
}

export default RandomMealService;