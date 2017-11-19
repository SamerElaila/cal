import React from 'react'

import Button from '../shared/Button'
import TextInput from '../shared/TextInput'

const NameEmailForm = ({ name, email, onInputChange, submitUserDetails }) => [
  <div
    className='w-100 pa4 tc f4 lh-copy'
  >
    Enter your email to sign in or register
  </div>,
  <form>
    <TextInput
      value={email}
      onChange={onInputChange}
      name='email'
      label='Email'
    />
  </form>,
  <Button
    className='absolute w-100 bottom-0 tc'
    onClick={submitUserDetails}
    >
    Next
  </Button>
]

export default NameEmailForm
