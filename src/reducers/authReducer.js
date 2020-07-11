import authService from "../services/authService"

const reducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.data
    case 'REMOVE_USER':
      return null
    default:
      return state
  }
}

export const login = (credentials) => {
  return async (dispatch) => {
    const res = await authService.login(credentials)
    if(res.success){
      window.localStorage.setItem('currentUser',JSON.stringify(res.user))
      window.localStorage.setItem('authToken',JSON.stringify(res.token))
      dispatch({
        type: 'SET_USER',
        data: res.user,
        error: null
      })
    } else {
      dispatch({
        type: 'SET_USER',
        data: null,
        error: res.error
      })
    }
  }
}

export const initUser = () => {
  return async (dispatch) => {
    const currentUserJSON = window.localStorage.getItem('currentUser')
    if(currentUserJSON) {
      const user = JSON.parse(currentUserJSON)
      dispatch({
        type: 'SET_USER',
        data: user
      })
    }
  }
}

export const logout = () => {
  return (dispatch) => {
    window.localStorage.removeItem('currentUser')
    window.localStorage.removeItem('authToken')
    dispatch({
      type: 'REMOVE_USER'
    })
  }
}

export default reducer