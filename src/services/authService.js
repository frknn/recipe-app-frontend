import axios from 'axios'

const url = 'http://localhost:5000/api/v1/auth'

const login = async (loginObject) => {
  try {
    const res = await axios.post(`${url}/login`, loginObject)
    return res.data

  } catch (error) {
    return error.response.data
  }
}

const register = async (registerObject) => {
  try {
    const res = await axios.post(`${url}/register`, registerObject)
    return res.data
  } catch (error) {
    return error.response.data
  }
}

export { login, register }