import React from 'react'

const TextArea = props =>
  <div className='w-100 pa4 pb0'>
    <textarea
      className='input-reset w-100 pa3 bw1 ba b--light-gray f4'
      {...props}
      />
  </div>

export default TextArea
