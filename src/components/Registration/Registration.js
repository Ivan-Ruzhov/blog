import React from 'react'
import { Link } from 'react-router-dom'

import classes from './Registration.module.scss'

const Registration = () => {
  console.log(classes)
  return (
    <div>
      <form>
        <h2>Create new account</h2>
        <label htmlFor="Username">Username</label>
        <input id="Username" type="text" required />
        <label htmlFor="email">Email address</label>
        <input id="email" type="text" required />
        <label htmlFor="password">Password</label>
        <input id="password" type="password" required />
        <label htmlFor="repeat-password">Repeat Password</label>
        <input id="repeat-password" type="password" required />
        <div>
          <input id="agree" type="checkbox" required />
          <label htmlFor="agree">I agree to the processing of my personal information</label>
        </div>
        <input type="submit" value="Create" />
      </form>
      <div>
        Already have an account?
        <Link to="/authorization">Sign In.</Link>
      </div>
    </div>
  )
}

export { Registration }
