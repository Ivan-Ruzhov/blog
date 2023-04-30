import { REGISTRATION, AUTHORIZATION, GET_PROFILE, UPDATE_PROFILE, LOG_OUT } from '../action/type'

const defaultState = {
  username: '',
  email: '',
  imageURL: '',
  token: '',
  login: false,
}

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case AUTHORIZATION:
      return {
        ...state,
        username: action.username,
        email: action.mail,
        token: action.token,
        imageURL: action.image,
        login: true,
      }
    case REGISTRATION:
      return state
    case GET_PROFILE:
      return {
        ...state,
        password: action.password,
      }
    case UPDATE_PROFILE:
      return {
        ...state,
        username: action.username,
        email: action.email,
        imageURL: action.image,
      }
    case LOG_OUT:
      return {
        username: '',
        email: '',
        imageURL: '',
        token: '',
        login: false,
      }
    default:
      return state
  }
}

export { userReducer }
