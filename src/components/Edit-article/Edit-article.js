import React from 'react'
import { useSelector } from 'react-redux'

import { CreateArticle } from '../Create-article'

const EditArticle = () => {
  const { slugArticle } = useSelector((state) => state.articlesReducer)
  return <CreateArticle arc={slugArticle} edit />
}

export { EditArticle }
