import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import classNames from 'classnames'

import { login } from '../../action/action'
import { root, registration } from '../Path/Path'

import classes from './Authorization.module.scss'

const Authorization = () => {
  const dispatch = useDispatch()
  const { logins } = useSelector((state) => state.userReducer)
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onBlur',
  })
  const onSubmit = (data) => {
    dispatch(login(data.email, data.password))
  }
  return (
    <>
      {logins ? (
        <Redirect to={root} />
      ) : (
        <form className={classes.auth} onSubmit={handleSubmit(onSubmit)}>
          <h2 className={classes.auth__header}>Sign In</h2>
          <label className={classes.auth__label} htmlFor="email">
            Email address
          </label>
          <input
            {...register('email', {
              required: 'Required field!',
              minLength: {
                value: 5,
                message: 'Field length, at least 5 characters!',
              },
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9-]+.+.[a-z]{2,4}$/,
                message: 'You can only use English letters and numbers',
              },
            })}
            id="email"
            type="email"
            placeholder="Email address"
            className={classNames(`${classes.auth__input} ${classes['auth__input-mail']}`, {
              [`${classes['auth__input-error']}`]: errors.email,
            })}
          />
          {errors.email ? <div className={classes.auth__error}>{errors.email.message}</div> : null}
          <label className={`${classes.auth__label} ${classes['auth__label-password']}`} htmlFor="password">
            Password
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
                message: 'Field length, maximum 40 characters!',
              },
              pattern: {
                value: /[A-Za-z0-9]/,
                message: 'You can only use lowercase English letters and numbers',
              },
            })}
            className={classNames(`${classes.auth__input} ${classes['auth__input-password']}`, {
              [`${classes['auth__input-error']}`]: errors.password,
            })}
            id="password"
            type="password"
            placeholder="Password"
          />
          {errors.password ? <div className={classes.auth__error}>{errors.password.message}</div> : null}
          <input
            {...register('agree', {
              required: 'Please tick this box!',
            })}
            className={classes.auth__submit}
            type="submit"
            value="Login"
          />
          <div className={classes.auth__reference}>
            <span>Don&#39;t have an account?</span>
            <Link to={registration}>Sing up</Link>
          </div>
        </form>
      )}
    </>
  )
}

export { Authorization }
