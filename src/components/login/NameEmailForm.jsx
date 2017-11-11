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
      value={name}
      onChange={onInputChange}
      name='name'
      placeholder='Your Name'
    />
    <TextInput
      value={email}
      onChange={onInputChange}
      name='email'
      placeholder='Your Email'
    />
    <br />
  </form>,
  <Button
    className='absolute w-100 bottom-0'
    onClick={submitUserDetails}
    >
    Sign Up
  </Button>
]

export default NameEmailForm
