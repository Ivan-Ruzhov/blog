import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Pagination, Spin } from 'antd'

import { articleGet } from '../../action/action'
import { Article } from '../Article'

import classes from './List-article.module.scss'

const ListArticle = () => {
  let id = 0
  const { articlesArr, totalArticles, loading } = useSelector((state) => state.articlesReducer)
  const [offset, setOffset] = useState(0)
  const [page, setPage] = useState(1)
  const count = articlesArr.length
  const onChange = (page) => {
    setPage(() => page)
    setOffset(() => count * page - 5)
  }
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(articleGet(offset))
  }, [])
  useEffect(() => {
    dispatch(articleGet(offset))
  }, [offset])
  const finalArr = articlesArr.map((el) => {
    return (
      <li className={classes['list-article__article']} key={++id}>
        <Article desc={el} />
      </li>
    )
  })
  return (
    <>
      {loading ? (
        <div className={classes.spin}>
          <Spin size={'large'} />
        </div>
      ) : (
        <ul className={classes['list-article']}>
          {finalArr}
          <div className={classes['list-article__pagination']}>
            <Pagination total={totalArticles} current={page} onChange={(page) => onChange(page)} />
          </div>
        </ul>
      )}
    </>
  )
}

export { ListArticle }
