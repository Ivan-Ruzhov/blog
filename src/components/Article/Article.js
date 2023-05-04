import React, { useMemo } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { format } from 'date-fns'
import { Popconfirm } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import { article, deleteArticle, deleteLike, addLike } from '../../action/action'
import { root } from '../Path/Path'

import classes from './Article.module.scss'

const Article = ({ desc, fullArticle }) => {
  const { createdAt, tagList, title, slug, author, description, favoritesCount, favorited } = desc
  const date = useMemo(() => format(new Date(createdAt), 'MMMM dd, yyyy'), [createdAt])
  const dispatch = useDispatch()
  const { username, logins } = useSelector((state) => state.userReducer)
  const { slugArticle } = useSelector((state) => state.articlesReducer)
  const tags = (arr) => {
    if (!arr.length) {
      return <div className={classes['article__first-wrapper-tags-tag']}>No tags</div>
    }
    return arr.map((el, index) => {
      if (el.length > 20) {
        el = el.slice(0, 20)
      }
      return (
        <div key={index} className={classes['article__first-wrapper-tags-tag']}>
          {el}
        </div>
      )
    })
  }
  const addLikes = (slug) => {
    dispatch(addLike(slug))
  }
  const deleteLikes = (slug) => {
    dispatch(deleteLike(slug))
  }
  return (
    <>
      {!slugArticle ? (
        <Redirect to={root} />
      ) : (
        <div className={classes.article}>
          <div className={classes['article__first-wrapper']}>
            <div className={classes['article__first-wrapper-header']}>
              <h2 className={classes['article__first-wrapper-header-title']}>
                <Link to={`/articles/${slug}`}>{title}</Link>
              </h2>
              <button
                className={classNames(classes['article__first-wrapper-header-button'], {
                  [classes['article__first-wrapper-header-button-like']]: favorited && logins,
                })}
                onClick={() => {
                  {
                    favorited ? deleteLikes(slug) : addLikes(slug)
                  }
                }}
                disabled={!logins}
              ></button>
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
                  <div className={classes['article__second-wrapper-user-wrapper-user-info-date-registration']}>
                    {date}
                  </div>
                </div>
                <div className={classes['article__second-wrapper-user-wrapper-user-avatar']}>
                  <img
                    className={classes['article__second-wrapper-user-wrapper-user-avatar-image']}
                    src={author.image}
                    alt="avatar"
                  />
                </div>
              </div>
              {username === author.username && fullArticle ? (
                <div className={classes['article__second-wrapper-button-wrapper']}>
                  <button
                    className={`${classes['article__second-wrapper-button-wrapper-buttons']} ${classes['article__second-wrapper-button-wrapper-button-delete']}`}
                  >
                    <Popconfirm
                      title="Are you sure to delete this article?"
                      placement={'right'}
                      onConfirm={() => {
                        article.deleteArticle(slug)
                        dispatch(deleteArticle())
                      }}
                    >
                      Delete
                    </Popconfirm>
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
      )}
    </>
  )
}

Article.defaultProps = {
  desc: {},
  fullArticle: false,
}

Article.propTypes = {
  desc: PropTypes.object,
  fullArticle: PropTypes.bool,
}

export { Article }
