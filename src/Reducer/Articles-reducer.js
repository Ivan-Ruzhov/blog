import { ARTICLES, ERROR, LOADING, END_LOADING } from '../action/type'

const defaultState = {
  articlesArr: [],
  err: '',
  loading: '',
  totalArticles: 0,
}

const articlesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ARTICLES:
      return {
        ...state,
        articlesArr: action.payload,
        totalArticles: action.total,
      }
    case ERROR:
      return {
        ...state,
        err: action.payload,
      }
    case LOADING:
      return {
        ...state,
        loading: true,
      }
    case END_LOADING:
      return {
        ...state,
        loading: false,
      }
    default:
      return state
  }
}

export { articlesReducer }
