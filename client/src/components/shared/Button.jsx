import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Button extends Component {
  render() {
    const { onClick, link } = this.props
    const inner = (
      <button
        className={`bg-light-red pa3 f3 bw0 ${this.props.className}`}
        onClick={onClick}
        >
        {this.props.children}
      </button>
    )

    return link
      ? <Link className='link black' to={link}> {inner} </Link>
      : inner
  }
}
export default Button
