import React from 'react'
import ReactDOM from 'react-dom'
import Notification from '../Message'

export function show() {
  const div = document.createElement('div')

  document.body.appendChild(div)
  ReactDOM.render(<Notification />, div)

  setTimeout(() => {
    ReactDOM.unmountComponentAtNode(div);
    document.body.removeChild(div);
  }, 2000)
}
