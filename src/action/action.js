import { ArticlesServes } from '../service/articles'

import {
  ARTICLES,
  ERROR,
  LOADING,
  END_LOADING,
  ARTICLES_SLUG,
  AUTHORIZATION,
  REGISTRATION,
  GET_PROFILE,
  UPDATE_PROFILE,
  LOG_OUT,
} from './type'

const article = new ArticlesServes()
const articleGet = (page) => (dispatch) => {
  dispatch(loadingStart())
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
const newUser = (name, mail, password) => (dispatch) => {
  article.registration(name, mail, password).then(() => {
    dispatch({ type: REGISTRATION })
  })
}

const login = (mail, password) => (dispatch) => {
  article.authorization(mail, password).then(({ user }) => {
    console.log(user)
    dispatch({ type: AUTHORIZATION, username: user.username, mail: user.email, image: user.image })
    sessionStorage.setItem('token', user.token)
  })
}

const getUser = () => (dispatch) => {
  article.getUser().then(({ user }) => {
    console.log(user)
    dispatch({ type: GET_PROFILE, password: user.password })
  })
}

const updateProfile = (data) => (dispatch) => {
  article.updateProfile(data).then(({ user }) => {
    console.log(user)
    dispatch({ type: UPDATE_PROFILE, email: user.email, image: user.image, username: user.username })
  })
}

const logOut = () => {
  return { type: LOG_OUT }
}

const loadingStart = () => {
  console.log('loading start')
  return { type: LOADING }
}

const loadingEnd = () => {
  console.log('loading end')
  return { type: END_LOADING }
}

const error = (payload) => {
  return { type: ERROR, payload }
}

export { articleGet, loadingStart, loadingEnd, error, articleSlug, newUser, login, getUser, updateProfile, logOut }
