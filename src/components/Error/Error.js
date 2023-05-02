import React from 'react'
import { Alert } from 'antd'

const Error = (props) => {
  return (
    <div>
      <Alert type="error" message={props} />
    </div>
  )
}

export { Error }
