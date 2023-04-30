import { ARTICLES, ERROR, LOADING, END_LOADING, ARTICLES_SLUG } from '../action/type'

const defaultState = {
  articlesArr: [],
  err: '',
  loading: true,
  totalArticles: 0,
  slugArticle: {},
}

const articlesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ARTICLES_SLUG:
      console.log(action.payload)
      return {
        ...state,
        slugArticle: action.payload,
      }
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
