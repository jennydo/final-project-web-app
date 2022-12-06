import axios from "axios";

const SEARCH_URL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='
const mealDetailsService = async (mid) => {
    const response = await axios.get(`${SEARCH_URL}${mid}`)
    return response.data.meals
}

export default mealDetailsService;
