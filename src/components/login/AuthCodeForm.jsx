import React from 'react'
import { Link } from 'react-router-dom'

import Button from '../shared/Button'
import TextInput from '../shared/TextInput'

const AuthCodeForm = ({ authenticationCode, onInputChange, login }) => [
  <div
    className='w-100 pa4 tc f4 lh-copy'
  >
    Enter the authentication code sent to your email address
  </div>,
  <form>
    <TextInput
      name='authenticationCode'
      value={authenticationCode}
      placeholder='code'
      onChange={onInputChange}
    />
  </form>,
  <Link to='/' className='link black'>
    <Button
      className='absolute w-100 bottom-0'
      onClick={login}
    >
      Login
    </Button>
  </Link>
]

export default AuthCodeForm
