import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <header className='bg-dark-green cf white w-100 pa1'>
        <div className='cf'>
          <div className='fl'>
            <h2 className='f2 ma1'>
              Cal
            </h2>
          </div>
        </div>
        {/*<ul className='cf list ma0 pa0 ttu '>
          <li className='w-33 fl tc pa1 bb b--white bw2'>
            <a>
              Events
            </a>
          </li>
          <li className='w-33 fl tc pa1'>
            <a>
              Event
            </a>
          </li>
          <li className='w-33 fl tc pa1'>
            <a>
              Event
            </a>
          </li>
        </ul>*/}
      </header>
    )
  }
}

export default Header
