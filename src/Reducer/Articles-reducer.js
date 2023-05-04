import {
  ADD_LIKE,
  ARTICLES,
  ARTICLES_SLUG,
  DELETE_ARTICLE,
  DELETE_LIKE,
  END_LOADING,
  ERROR,
  ERROR_CLEAR,
  LOADING,
} from '../action/type'

const defaultState = {
  articlesArr: [],
  err: '',
  loading: true,
  totalArticles: 0,
  slugArticle: {},
}

const articlesReducer = (state = defaultState, action) => {
  const findArticle = (arrArticle, article) => {
    const id = arrArticle.findIndex((el) => el.slug === article.slug)
    return [...arrArticle.slice(0, id), article, ...arrArticle.slice(id + 1)]
  }
  switch (action.type) {
    case ARTICLES_SLUG:
      return {
        ...state,
        slugArticle: action.payload,
      }
    case ADD_LIKE:
      return {
        ...state,
        articlesArr: findArticle(state.articlesArr, action.payload),
        slugArticle: action.payload,
      }
    case DELETE_LIKE:
      return {
        ...state,
        articlesArr: findArticle(state.articlesArr, action.payload),
        slugArticle: action.payload,
      }
    case ARTICLES:
      return {
        ...state,
        articlesArr: action.payload,
        totalArticles: action.total,
      }
    case DELETE_ARTICLE:
      return {
        ...state,
        slugArticle: {},
      }
    case ERROR:
      return {
        ...state,
        err: action.payload,
      }
    case ERROR_CLEAR:
      return {
        ...state,
        err: '',
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
