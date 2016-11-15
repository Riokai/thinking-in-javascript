import React, { PropTypes } from 'react'
import { show } from './service/message'

const Button = (props, context) => {
  return (
    <button
      style={{
        marginLeft: 20,
        position: 'relative',
        top: -2,
        background: context.bgColor
      }}
      onClick={show}
    >123</button>
  )
}

Button.contextTypes = {
  bgColor: PropTypes.string
}

export default Button
