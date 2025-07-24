import React from 'react'

const ThemeButton = ({children, ...props}) => {
  return (
    <button {...props}>{children}</button>
  )
}

export default ThemeButton