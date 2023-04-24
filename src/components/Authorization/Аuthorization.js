import React from 'react'
import { Link } from 'react-router-dom'

import classes from './Authorization.module.scss'

const Authorization = () => {
  console.log(classes)
  return (
    <div>
      <form>
        <h2>Sign In</h2>
        <label htmlFor="email">Email address</label>
        <input id="email" type="text" required />
        <label htmlFor="password"></label>
        <input id="password" type="password" required />
        <input type="submit" value="Login" />
        <div>
          <span>Don&#39;t have an account?</span>
          <Link to="/registration">Sing Up</Link>
        </div>
      </form>
    </div>
  )
}

export { Authorization }
