import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import classNames from 'classnames'

import { logOut } from '../../action/action'

import classes from './Header.module.scss'

const Header = () => {
  const dispatch = useDispatch()
  const [activeLink, setActiveLink] = useState()
  const { username, imageURL, logins } = useSelector((state) => state.userReducer)
  const addClass = (id) => {
    setActiveLink(id)
  }
  return (
    <div className={classes.header}>
      <div className={classes['header__link-start']}>
        <Link to="/">Realworld Blog</Link>
      </div>
      <ul className={classes['header__list-links']}>
        {!logins ? (
          <li
            className={classNames(classes['header__list-links-link'], {
              [classes['header__list-links-link-active']]: 'Sing-In' === activeLink,
            })}
            onClick={() => addClass('Sing-In')}
          >
            <Link to="/sign-in">Sign In</Link>
          </li>
        ) : null}
        {logins ? (
          <li className={`${classes['header__list-links-link']} ${classes['header__list-links-link-create']}`}>
            <Link to="/new-article">Create article</Link>
          </li>
        ) : null}
        {logins ? (
          <li className={classes['header__list-links-link']}>
            <Link to="/profile">
              <span className={classes['header__list-links-link-span']}>{username}</span>
              {imageURL ? (
                <img className={classes['header__list-links-image']} src={imageURL} alt="Avatar" />
              ) : (
                <img
                  className={classes['header__list-links-image']}
                  src="https://static.productionready.io/images/smiley-cyrus.jpg"
                  alt="Avatar"
                />
              )}
            </Link>
          </li>
        ) : null}
        {!logins ? (
          <li
            className={classNames(classes['header__list-links-link'], {
              [classes['header__list-links-link-active']]: 'Sing-Up' === activeLink,
            })}
            onClick={() => addClass('Sing-Up')}
          >
            <Link to="/sign-up">Sign Up</Link>
          </li>
        ) : null}
        {logins ? (
          <li className={`${classes['header__list-links-link']} ${classes['header__list-links-link-out']}`}>
            <Link to="/" onClick={() => dispatch(logOut())}>
              Log Out
            </Link>
          </li>
        ) : null}
      </ul>
    </div>
  )
}

export { Header }
