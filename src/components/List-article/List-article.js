import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Pagination } from 'antd'

import { articleGet } from '../../action/action'
import { Article } from '../Article'

// import classes from './List-article.module.scss'

const ListArticle = () => {
  let id = 0
  const { articlesArr, totalArticles } = useSelector((state) => state.articlesReducer)
  console.log(articlesArr)
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
  const finalArr = articlesArr.map((el) => <Article key={++id} desc={el} />)
  return (
    <>
      {finalArr}
      <Pagination total={totalArticles} current={page} onChange={(page) => onChange(page)} />
    </>
  )
}

export { ListArticle }
