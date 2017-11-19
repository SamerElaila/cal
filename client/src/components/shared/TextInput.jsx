import React from 'react'

const TextInput = props => {
  const { label, value, ...inputProps } = props
  return (
    <div className='w-100 pa4 pb0'>
      <label
        className='f4 pa1 ttu'
        htmlFor={props.name}
      >
        {label}
      </label>
      <input
        style={{ borderWidth: '0 0 .1em 0'}}
        className='input-reset w-100 pa1 bw1 b--gray f3 outline-0 mt2 fw1'
        type='text'
        value={value || ''}
        {...inputProps}
        />
    </div>
  )
}
export default TextInput
