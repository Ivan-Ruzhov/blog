import React from 'react'
import { useForm } from 'react-hook-form'
import classNames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'

import { updateProfile } from '../../action/action'

import classes from './Profile.module.scss'

const Profile = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onBlur',
  })
  const dispatch = useDispatch()
  const { username, email, imageURL } = useSelector((state) => state.userReducer)
  const onSubmit = (data) => {
    dispatch(updateProfile(data))
  }
  return (
    <form className={classes.profile} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={classes.profile__header}>Edit Profile</h2>
      <label className={classes.profile__label} htmlFor="Username">
        Username
      </label>
      <input
        {...register('username', {
          required: 'Required field!',
          minLength: {
            value: 3,
            message: 'Field length, at least 3 characters!',
          },
          maxLength: {
            value: 20,
            message: 'Field length, maximum 20 characters!',
          },
          pattern: {
            value: /^[a-z][a-z0-9]*$/,
            message: 'You can only use lowercase English letters and numbers',
          },
        })}
        id="Username"
        placeholder="New Username"
        defaultValue={username}
        className={classNames(classes.profile__input, {
          [`${classes['profile__input-error']}`]: errors.username,
        })}
      />
      {errors.username ? <div className={classes.profile__error}>{errors.username.message}</div> : null}
      <label className={classes.profile__label} htmlFor="Email">
        Email address
      </label>
      <input
        {...register('email', {
          pattern: {
            value: /^[a-z0-9._%+-]+@[a-z0-9-]+.+.[a-z]{2,4}$/,
            message: 'You can only use lowercase English letters and numbers',
          },
        })}
        id="Email"
        type="text"
        placeholder="New email"
        defaultValue={email}
        className={classNames(classes.profile__input, {
          [`${classes['profile__input-error']}`]: errors.email,
        })}
      />
      {errors.email ? <div className={classes.profile__error}>{errors.email.message}</div> : null}
      <label className={classes.profile__label} htmlFor="password">
        New password
      </label>
      <input
        {...register('password', {
          required: 'Required field!',
          minLength: {
            value: 6,
            message: 'Field length, at least 6 characters!',
          },
          maxLength: {
            value: 40,
            message: 'Field length, maximum 40 characters',
          },
          pattern: {
            value: /[A-Za-z0-9]/,
            message: 'You can only use lowercase English letters and numbers',
          },
        })}
        id="password"
        type="password"
        placeholder="New password"
        className={classNames(classes.profile__input, {
          [`${classes['profile__input-error']}`]: errors.password,
        })}
      />
      {errors.password ? <div className={classes.profile__error}>{errors.password.message}</div> : null}
      <label className={classes.profile__label} htmlFor="Avatar-image">
        Avatar image (url)
      </label>
      <input
        {...register('avatar', {
          pattern: {
            value: /[-a-zA-Z0-9@:%_+.~#?&/=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_+.~#?&/=]*)?/gi,
            message: 'HTTPS ERROR',
          },
        })}
        id="Avatar-image"
        type="url"
        placeholder="Avatar image"
        defaultValue={imageURL}
        className={classNames(classes.profile__input, {
          [`${classes['profile__input-error']}`]: errors['Avatar-image'],
        })}
      />
      {errors['Avatar-image'] ? <div className={classes.profile__error}>{errors['Avatar-image'].message}</div> : null}
      <input className={classes.profile__submit} type="submit" value="Save" />
    </form>
  )
}

export { Profile }
