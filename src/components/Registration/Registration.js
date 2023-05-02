import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import classNames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'

import { newUser } from '../../action/action'

import classes from './Registration.module.scss'

const Registration = () => {
  const dispatch = useDispatch()
  const { registr } = useSelector((state) => state.userReducer)
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onBlur',
  })
  const onSubmit = (data) => {
    dispatch(newUser(data.username, data.email))
  }
  return (
    <>
      {registr ? (
        <Redirect to="/sign-in" />
      ) : (
        <form className={classes.regist} onSubmit={handleSubmit(onSubmit)}>
          <h2 className={classes.regist__header}>Create new account</h2>
          <label className={classes.regist__label} htmlFor="username">
            Username
          </label>
          <input
            {...register('username', {
              required: 'Required field',
              minLength: {
                value: 3,
                message: 'минимум 3 символа!',
              },
              maxLength: {
                value: 20,
                message: 'максимум 20 символов',
              },
              pattern: {
                value: /^[a-z][a-z0-9]*$/,
                message: 'You can only use lowercase English letters and numbers',
              },
            })}
            id="username"
            type="text"
            className={classNames(classes.regist__input, {
              [`${classes['regist__input-error']}`]: errors.username,
            })}
          />
          {errors.username ? <div className={classes.regist__error}>{errors.username.message}</div> : null}
          <label className={classes.regist__label} htmlFor="email">
            Email address
          </label>
          <input
            {...register('email', {
              required: 'Required field',
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
            type="text"
            className={classNames(classes.regist__input, {
              [`${classes['regist__input-error']}`]: errors.email,
            })}
          />
          {errors.email ? <div className={classes.regist__error}>{errors.email.message}</div> : null}
          <label className={classes.regist__label} htmlFor="password">
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
                message: 'You can only use English letters and numbers',
              },
            })}
            id="password"
            type="password"
            className={classNames(classes.regist__input, {
              [`${classes['regist__input-error']}`]: errors.password,
            })}
          />
          {errors.password ? <div className={classes.regist__error}>{errors.password.message}</div> : null}
          <label className={classes.regist__label} htmlFor="repeat-password">
            Repeat Password
          </label>
          <input
            {...register('repeat-password', {
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
                message: 'You can only use English letters and numbers',
              },
              validate: (value, formValues) => {
                if (value !== formValues.password) {
                  return 'Password mismatch!'
                }
              },
            })}
            id="repeat-password"
            type="password"
            className={classNames(classes.regist__input, {
              [`${classes['regist__input-error']}`]: errors['repeat-password'],
            })}
          />
          {errors['repeat-password'] ? (
            <div className={classes.regist__error}>{errors['repeat-password'].message}</div>
          ) : null}
          <div className={classes.regist__container}>
            <input
              {...register('agree', {
                required: 'Please tick this box!',
              })}
              id="agree"
              type="checkbox"
              className={classes.regist__checkbox}
            />
            <label className={classes['regist__label-checkbox']} htmlFor="agree">
              I agree to the processing of my personal information
            </label>
          </div>
          {errors.agree ? <div className={classes.regist__error}>{errors.agree.message}</div> : null}
          <input type="submit" value="Create" className={classes.regist__submit} />
          <div className={classes.regist__reference}>
            Already have an account?
            <Link to="/sign-in">Sign In.</Link>
          </div>
        </form>
      )}
    </>
  )
}

export { Registration }
