import React from 'react'

import classes from './Profile.module.scss'

const Profile = () => {
  console.log(classes)
  return (
    <form>
      <h2>Edit Profile</h2>
      <label htmlFor="Username"></label>
      <input id="Username" type="text" />
      <label htmlFor="Email"></label>
      <input id="Email" type="text" />
      <label htmlFor="password"></label>
      <input id="password" type="password" />
      <label htmlFor="Avatar-image">Avatar image (url)</label>
      <input id="Avatar-image" type="url" />
      <input type="submit" value="Save" />
    </form>
  )
}

export { Profile }
