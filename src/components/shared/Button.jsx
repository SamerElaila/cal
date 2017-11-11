import React, { Component } from 'react'

class Button extends Component {
  render() {
    const { onClick } = this.props
    return (
      <div
        className={`bg-light-red pa3 f3 ${this.props.className}`}
        onClick={onClick}
        >
        {this.props.children}
      </div>
    )
  }
}
export default Button
