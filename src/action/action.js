import { ArticlesServes } from '../service/articles'

import {
  ARTICLES,
  ERROR,
  LOADING,
  END_LOADING,
  ARTICLES_SLUG,
  AUTHORIZATION,
  REGISTRATION,
  UPDATE_PROFILE,
  LOG_OUT,
  DELETE_ARTICLE,
  ERROR_CLEAR,
} from './type'

const article = new ArticlesServes()
const articleGet = (page) => (dispatch) => {
  dispatch(loadingStart())
  dispatch(errorClear())
  article
    .getArticles(page)
    .then((res) => {
      dispatch({ type: ARTICLES, payload: res.articles, total: res.articlesCount })
      dispatch(loadingEnd())
    })
    .catch((err) => {
      dispatch(error(err))
      dispatch(loadingEnd())
    })
}
const articleSlug = (slug) => (dispatch) => {
  dispatch(loadingStart())
  dispatch(errorClear())
  article
    .getArticleSlug(slug)
    .then((res) => {
      dispatch({ type: ARTICLES_SLUG, payload: res.article })
      dispatch(loadingEnd())
    })
    .catch((err) => {
      dispatch(error(err))
      dispatch(loadingEnd())
    })
}
const newUser = (name, mail) => (dispatch) => {
  dispatch(loadingStart())
  dispatch(errorClear())
  article
    .registration(name, mail)
    .then(() => {
      dispatch({ type: REGISTRATION })
    })
    .catch((err) => {
      if (err.response.status === 500) {
        err.message =
          'Error on the server side, try sending the request again, after checking the correctness of the input data'
      }
      dispatch(error(err))
      dispatch(loadingEnd())
    })
}

const login = (mail, password) => (dispatch) => {
  dispatch(loadingStart())
  dispatch(errorClear())
  article
    .authorization(mail, password)
    .then(({ user }) => {
      sessionStorage.setItem('token', user.token)
      dispatch({ type: AUTHORIZATION, username: user.username, mail: user.email, image: user.image })
    })
    .catch((err) => {
      if (err.response.status === 422) {
        err.message = 'Incorrect login or password'
      }
      dispatch(error(err))
      dispatch(loadingEnd())
    })
}

const updateProfile = (data) => (dispatch) => {
  dispatch(loadingStart())
  dispatch(errorClear())
  article
    .updateProfile(data)
    .then(({ user }) => {
      dispatch({ type: UPDATE_PROFILE, email: user.email, image: user.image, username: user.username })
    })
    .catch((err) => {
      dispatch(error(err))
      dispatch(loadingEnd())
    })
}

const logOut = () => {
  return { type: LOG_OUT }
}

const deleteArticle = () => {
  return { type: DELETE_ARTICLE }
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

const errorClear = () => {
  return { type: ERROR_CLEAR }
}

export {
  articleGet,
  loadingStart,
  loadingEnd,
  error,
  articleSlug,
  newUser,
  login,
  updateProfile,
  logOut,
  deleteArticle,
  article,
}
