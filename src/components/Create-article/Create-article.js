import React from 'react'
import { useForm } from 'react-hook-form'

import classes from './Create-article.scss'

const createArticle = () => {
  console.log(classes)
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onBlur',
  })
  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Create new article</h2>
      <label htmlFor="title">Title</label>
      <input
        id="title"
        {...register('title', {
          required: 'Required field',
          minLength: {
            value: 1,
            message: 'Field length, at least 1 character',
          },
          maxLength: {
            value: 25,
            message: 'Field length, maximum 25 characters',
          },
        })}
        placeholder="Title"
      />
      {errors.title ? <div>{errors.title.message}</div> : null}
      <label htmlFor="description">Short description</label>
      <input
        id="description"
        {...register('description', {
          required: 'Required field',
          minLength: {
            value: 1,
            message: 'Field length, at least 1 character',
          },
          maxLength: {
            value: 40,
            message: 'Field length, maximum 40 characters',
          },
        })}
        placeholder="Title"
      />
      {errors.description ? <div>{errors.description.message}</div> : null}
      <label htmlFor="text">Text</label>
      <input
        id="text"
        {...register('text', {
          required: 'Required field',
          minLength: {
            value: 1,
            message: 'Field length, at least 1 character',
          },
          maxLength: {
            value: 1000,
            message: 'Field length, maximum 100 characters',
          },
        })}
        placeholder="Title"
      />
      {errors.text ? <div>{errors.text.message}</div> : null}
    </form>
  )
}

export { createArticle }
