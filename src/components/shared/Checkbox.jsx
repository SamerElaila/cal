import React from 'react'

const CheckBox = props =>
  <input
    className={`${props.className}`}
    type='checkbox'
    {...props}
  />

export default Checkbox
