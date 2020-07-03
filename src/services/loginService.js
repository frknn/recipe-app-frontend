import axios from 'axios'

const url = 'http://localhost:5000/api/v1/auth/login'

const login = async (loginObject) => {
  try {
    const res = await axios.post(url, loginObject)
    return res.data

  } catch (error) {
    return error.response.data
  }
}

export { login }