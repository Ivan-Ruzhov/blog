import React from 'react'
import { format } from 'date-fns'

import classes from './Article.module.scss'

const Article = ({ desc }) => {
  const { createdAt, tagList, title, author, description, favoritesCount } = desc
  const date = format(new Date(createdAt), 'MMMM dd, yyyy')
  return (
    <div className={classes.article}>
      <div className={classes['article__first-wrapper']}>
        <div className={classes['article__first-wrapper-header']}>
          <h2 className={classes['article__first-wrapper-header-title']}>{title}</h2>
          <button className={classes['article__first-wrapper-header-button']}></button>
          <div className={classes['article__first-wrapper-header-likes']}>{favoritesCount}</div>
        </div>
        <div className={classes['article__first-wrapper-tags']}>
          <div className={classes['article__first-wrapper-tags-tag']}>{tagList[0]}</div>
        </div>
        <div className={classes['article__first-wrapper-description']}>{description}</div>
      </div>
      <div className={classes['article__user-wrapper']}>
        <div className={classes['article__user-wrapper-user-info']}>
          <div className={classes['article__user-wrapper-user-info-username']}>{author.username}</div>
          <div className={classes['article__user-wrapper-user-info-date-registration']}>{date}</div>
        </div>
        <div className={classes['article__user-wrapper-user-avatar']}>
          <img className={classes['article__user-wrapper-user-avatar-image']} src={author.image} alt="avatar" />
        </div>
      </div>
    </div>
  )
}

export { Article }
