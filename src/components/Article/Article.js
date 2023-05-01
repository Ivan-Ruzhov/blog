import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { format } from 'date-fns'

import classes from './Article.module.scss'

const Article = ({ desc, isFullArticle = false }) => {
  const { createdAt, tagList, title, slug, author, description, favoritesCount } = desc
  const date = useMemo(() => format(new Date(createdAt), 'MMMM dd, yyyy'), [createdAt])
  const tags = (arr) => {
    if (!arr.length) {
      return <div className={classes['article__first-wrapper-tags-tag']}>Нет тегов</div>
    }
    return arr.map((el, index) => {
      return (
        <div key={index} className={classes['article__first-wrapper-tags-tag']}>
          {el}
        </div>
      )
    })
  }
  return (
    <div className={classes.article}>
      <div className={classes['article__first-wrapper']}>
        <div className={classes['article__first-wrapper-header']}>
          <h2 className={classes['article__first-wrapper-header-title']}>
            <Link to={`/articles/${slug}`}>{title}</Link>
          </h2>
          <button className={classes['article__first-wrapper-header-button']}></button>
          <div className={classes['article__first-wrapper-header-likes']}>{favoritesCount}</div>
        </div>
        <div className={classes['article__first-wrapper-tags']}>{tags(tagList)}</div>
        <div className={classes['article__first-wrapper-description']}>{description}</div>
      </div>
      <div className={classes['article__second-wrapper']}>
        <div className={classes['article__second-wrapper-wrapper-info']}>
          <div className={classes['article__second-wrapper-user-wrapper']}>
            <div className={classes['article__second-wrapper-user-wrapper-user-info']}>
              <div className={classes['article__second-wrapper-user-wrapper-user-info-username']}>
                {author.username}
              </div>
              <div className={classes['article__second-wrapper-user-wrapper-user-info-date-registration']}>{date}</div>
            </div>
            <div className={classes['article__second-wrapper-user-wrapper-user-avatar']}>
              <img
                className={classes['article__second-wrapper-user-wrapper-user-avatar-image']}
                src={author.image}
                alt="avatar"
              />
            </div>
          </div>
          {isFullArticle ? (
            <div className={classes['article__second-wrapper-button-wrapper']}>
              <button
                className={`${classes['article__second-wrapper-button-wrapper-buttons']} ${classes['article__second-wrapper-button-wrapper-button-delete']}`}
              >
                Delete
              </button>
              <button
                className={`${classes['article__second-wrapper-button-wrapper-buttons']} ${classes['article__second-wrapper-button-wrapper-button-edit']}`}
              >
                <Link to="/articles/{slug}/edit">Edit</Link>
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export { Article }
