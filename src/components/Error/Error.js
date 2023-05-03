import React from 'react'
import { Alert } from 'antd'
import { useSelector } from 'react-redux'

const Error = () => {
  const { err } = useSelector((state) => state.articlesReducer)
  return (
    <div>
      <Alert type="error" message={err.message} />
    </div>
  )
}

export { Error }
