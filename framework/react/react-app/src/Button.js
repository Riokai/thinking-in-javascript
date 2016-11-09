import React, { PropTypes } from 'react'

const Button = (props, context) => {
  return (
    <button
      style={{
        marginLeft: 20,
        position: 'relative',
        top: -2,
        background: context.bgColor
      }}
    >123</button>
  )
}

Button.contextTypes = {
  bgColor: PropTypes.string
}

export default Button
