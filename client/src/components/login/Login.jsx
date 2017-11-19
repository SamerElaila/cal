import React, { Component } from 'react';

import NameEmailForm from './NameEmailForm'
import AuthCodeForm from './AuthCodeForm'

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formState: {
        name: '',
        email: ''
      },
      userDetailsSubmitted: false
    }

    this.submitUserDetails = this.submitUserDetails.bind(this)
  }

  onInputChange = e => {
    this.setState({
      ...this.state,
      formState: {
        ...this.state.formState,
        [e.target.name]: e.target.value
      }
    })
  }

  submitUserDetails = () => {
    this.setState({
      ...this.state,
      userDetailsSubmitted: true
    })
  }

  render() {
    const {
      formState: { name, email, authenticationCode },
      userDetailsSubmitted
    } = this.state

    return (
      <div className='min-h-100'>
        <h1 className='dark-gray f3 tc pt3 mt0'> Welcome to cal </h1>
        {
          !userDetailsSubmitted ? (
            <NameEmailForm
              name={name}
              email={email}
              onInputChange={this.onInputChange}
              submitUserDetails={this.submitUserDetails}
              />
          ) : (
            <AuthCodeForm
              authenticationCode={authenticationCode}
              onInputChange={this.onInputChange}
              login={this.login}
            />
          )
        }
      </div>
    )
  }
}

export default SignUpForm;
