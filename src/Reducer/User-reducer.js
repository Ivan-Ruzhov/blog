import { REGISTRATION, AUTHORIZATION, UPDATE_PROFILE, LOG_OUT } from '../action/type'

const defaultState = {
  username: '',
  email: '',
  imageURL: '',
  token: '',
  logins: false,
  registr: false,
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
        logins: true,
      }
    case REGISTRATION:
      return {
        ...state,
        registr: true,
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
        logins: false,
        registr: false,
      }
    default:
      return state
  }
}

export { userReducer }
