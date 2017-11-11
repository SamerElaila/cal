import React from 'react'

const TextInput = props =>
  <div className='w-100 pa4 pb0'>
    <input
      className='input-reset w-100 pa3 bw1 ba b--light-gray f4'
      type='text'
      {...props}
      />
  </div>

export default TextInput
