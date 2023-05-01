import React from 'react'
import { useForm, useFieldArray, Controller } from 'react-hook-form'

import classes from './Create-article.module.scss'

const CreateArticle = ({ edit }) => {
  console.log(classes)
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm({
    defaultValues: {
      tag: [{ tagName: '' }],
    },
    mode: 'onBlur',
  })
  const {
    fields: tagFields,
    append: tagAppend,
    remove: tagRemove,
  } = useFieldArray({
    control,
    name: 'tag',
  })
  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <form className={classes.created} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={classes.created__header}>{edit ? 'Edit article' : 'Create new article'}</h2>
      <label className={classes.created__label} htmlFor="title">
        Title
      </label>
      <input
        className={classes.created__input}
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
      {errors.title ? <div className={classes.created__error}>{errors.title.message}</div> : null}
      <label className={classes.created__label} htmlFor="description">
        Short description
      </label>
      <input
        className={classes.created__input}
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
      {errors.description ? <div className={classes.created__error}>{errors.description.message}</div> : null}
      <label className={classes.created__label} htmlFor="text">
        Text
      </label>
      <input
        className={`${classes.created__input} ${classes['created__input-text']}`}
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
        placeholder="Text"
      />
      {errors.text ? <div className={classes.created__error}>{errors.text.message}</div> : null}
      <h3 className={classes.created__label}>Tags</h3>
      <div className={classes['created__tags-container']}>
        <ul className={classes['created__tag-list']}>
          {tagFields.map((item, index) => {
            return (
              <li key={item.id} className={classes['created__tag-item']}>
                <Controller
                  name={`tag.${index}.tagName`}
                  control={control}
                  render={() => (
                    <input
                      {...register(`tag[${index}].tagNAme`, {
                        required: 'Required field!',
                        minLength: {
                          value: 1,
                          message: 'Field length, at least 5 characters!',
                        },
                        maxLength: {
                          value: 20,
                          message: 'Field length, maximum 20 characters!',
                        },
                      })}
                      placeholder="Tag"
                      className={`${classes.created__input} ${classes['created__input-tag']}`}
                    />
                  )}
                />
                {errors[`tag[${index}].tagNAme`] ? (
                  <div className={classes.created__error}>{errors[`tag[${index}].tagNAme`].message}</div>
                ) : null}
                <button
                  className={classes['created__button-delete']}
                  type="button"
                  onClick={() => {
                    tagRemove(index)
                  }}
                >
                  Delete
                </button>
              </li>
            )
          })}
        </ul>
        <button
          className={classes['created__button-add']}
          type="button"
          onClick={() =>
            tagAppend({
              name: 'tag',
            })
          }
        >
          Add tag
        </button>
      </div>
      <input className={classes.created__submit} type="submit" value="Send" />
    </form>
  )
}

export { CreateArticle }
