import axios from "axios";

const BASE_API_URL = 'http://localhost:4000'
const USER_API_URL = 'http://localhost:4000/users'

export const register = async (user) => {
    const response = await axios.post(`${BASE_API_URL}/register`, user)
    const newUser = response.data
    return newUser
}

export const login = async (user) => {
    const response = await axios.post(`${BASE_API_URL}/login`, user)
    return response.data
}

export const logout = async () => {
    const response = await axios.post(`${BASE_API_URL}/logout`)
    return response.data
}
export const profile = async () => {
    const response = await axios.post(`${BASE_API_URL}/profile`)
    return response.data
}

export const findAllUsers = async () => {
    const response = await axios.get(USER_API_URL)
    return response.data
}

export const createUser = () => {

}

const deleteUser = () => {}
const updateUser = () => {}