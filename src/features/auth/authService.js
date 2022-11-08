import axios from 'axios'



//Register user
const register = async (userData) => {
    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/users`, userData)

    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

// SignIn user
const signin = async (userData) => {
    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/users/signin`, userData)

    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

// get user details
const userDetails = async () => {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/users/me`)

    if(response.status !== 200){
        console.log("Error in user data fetch")
    }

    return response 
}

// Logout user
const logout = () => {
    localStorage.removeItem('user')
}

const authService = {
    register,
    logout,
    signin,
    userDetails
}

export default authService