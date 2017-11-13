import React from 'react'

const TextArea = props => {
  const { label, ...inputProps } = props
  return (
    <div className='w-100 pa4 pb0'>
      <label
        className='f4 pa1 ttu'
        for={props.name}
        >
        {label}
      </label>
      <textarea
        className='input-reset w-100 pa1 bw1 b--light-gray f4 outline-0 mt2 fw1'
        {...inputProps}
        />
    </div>
  )
}

export default TextArea
