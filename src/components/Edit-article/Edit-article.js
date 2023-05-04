import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { CreateArticle } from '../Create-article'
import { registration } from '../Path/Path'

const EditArticle = () => {
  const { slugArticle } = useSelector((state) => state.articlesReducer)
  const { logins } = useSelector((state) => state.userReducer)
  return <>{logins ? <CreateArticle arc={slugArticle} edit /> : <Redirect to={registration} />}</>
}

export { EditArticle }
