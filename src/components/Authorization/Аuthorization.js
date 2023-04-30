import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import classNames from 'classnames'

import { login } from '../../action/action'

import classes from './Authorization.module.scss'

const Authorization = () => {
  const dispatch = useDispatch()
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onBlur',
  })
  const onSubmit = (data) => {
    dispatch(login(data.email, data.password))
    reset()
  }
  return (
    <form className={classes.auth} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={classes.auth__header}>Sign In</h2>
      <label className={classes.auth__label} htmlFor="email">
        Email address
      </label>
      <input
        {...register('email', {
          required: 'Поле обязательно, для заполнения',
          minLength: {
            value: 5,
            message: 'минимум 5 символов!',
          },
          pattern: {
            value: /^[a-z0-9._%+-]+@[a-z0-9-]+.+.[a-z]{2,4}$/,
            message: 'You can only use lowercase English letters and numbers',
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
          required: 'Поле обязательно, для заполнения',
          minLength: {
            value: 6,
            message: 'минимум 6 символов!',
          },
          maxLength: {
            value: 40,
            message: 'максимум 40 символов!',
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
          required: 'Почтавьте галочку на данном поле!',
        })}
        className={classes.auth__submit}
        type="submit"
        value="Login"
      />
      <div className={classes.auth__reference}>
        <span>Don&#39;t have an account?</span>
        <Link to="/sign-up">Sing up</Link>
      </div>
    </form>
  )
}

export { Authorization }
