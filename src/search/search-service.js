import axios from "axios";

const SEARCH_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s='


export const findFoodBySearchTerm = async (term) => {
    const response = await axios.get(`${SEARCH_URL}${term}`)
    return response.data.Search
}

