import { ArticlesServes } from '../service/articles'

import { ARTICLES, ERROR, LOADING, END_LOADING } from './type'

const article = new ArticlesServes()
const articleGet = (page) => (dispatch) => {
  dispatch(loadingStart())
  article
    .getArticles(page)
    .then((res) => {
      console.log(res)
      dispatch({ type: ARTICLES, payload: res.articles, total: res.articlesCount })
      dispatch(loadingEnd())
    })
    .catch((err) => {
      dispatch(error(err))
    })
}

const loadingStart = () => {
  return { type: LOADING }
}

const loadingEnd = () => {
  return { type: END_LOADING }
}

const error = (payload) => {
  return { type: ERROR, payload }
}

export { articleGet, loadingStart, loadingEnd, error }
