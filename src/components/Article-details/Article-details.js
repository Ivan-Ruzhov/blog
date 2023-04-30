import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ReactMarkdown from 'react-markdown'
import { Spin } from 'antd'

import { Article } from '../Article'
import { articleSlug } from '../../action/action'

import classes from './Article-details.module.scss'

const ArticleDetails = (props) => {
  const { slugArticle, loading } = useSelector((state) => state.articlesReducer)
  const dispatch = useDispatch()
  useEffect(() => {
    console.log('useEffect')
    dispatch(articleSlug(props.params.params.slug))
  }, [])
  console.log(Object.keys(slugArticle).length)
  return (
    <>
      {loading ? (
        <Spin />
      ) : (
        <div className={classes['article-detail']}>
          {Object.keys(slugArticle).length && <Article desc={slugArticle} isFullArticle />}
          <div className={classes['article-detail__text']}>
            <ReactMarkdown>{slugArticle.body}</ReactMarkdown>
          </div>
        </div>
      )}
    </>
  )
}

export { ArticleDetails }
