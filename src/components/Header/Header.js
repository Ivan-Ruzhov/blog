import React from 'react'
import { Link } from 'react-router-dom'

import classes from './Header.module.scss'

const Header = () => {
  console.log(classes)
  return (
    <div>
      <Link to="/">Realworld Blog</Link>
      <ul>
        <li>
          <Link to="/authorization">Sign In</Link>
        </li>
        <li>
          <Link to="/create-article">Create article</Link>
        </li>
        <li>
          <Link to="/profile">
            Name <img src="" alt="Avatar" />
          </Link>
        </li>
        <li>
          <Link to="/registration">Sign Up</Link>
        </li>
      </ul>
    </div>
  )
}

export { Header }
