import React, { Component } from 'react'

class FAB extends Component {
  render() {
    const { children, onClick } = this.props
    return (
      <div
        className='absolute right-1 bottom-1 br-100 bg-green'
        onClick={onClick}
      >
        {children}
      </div>
    )
  }
}

export default FAB
