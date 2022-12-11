import axios from "axios";


const API_BASE = 'http://localhost:4000'
const BLOG_API = API_BASE + '/blog'

export const createBlog = async (blog) => {
    const response = await axios.post(BLOG_API, blog)
    return response.data
}

export const getAllBlogs = async () => {
    const response = await axios.get(BLOG_API)
    return response.data
}

export const getBlogDetails = async (bid) => {
    const response = await axios.get(`${BLOG_API}/${bid}`)
    return response.data
}

