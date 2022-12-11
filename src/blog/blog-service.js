import axios from "axios";


const API_BASE = 'http://localhost:4000'
const BLOG_API = API_BASE + '/blog'

export const createBlog = async (blog) => {
    const response = await axios.post(BLOG_API, blog)
    console.log(response)
    return response.data
}