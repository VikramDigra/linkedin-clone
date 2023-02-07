import React from 'react'

function Header() {
  return (
    <div>
      {' '}
      <div className='header'>
        <div className='header-left'>
          <div className='header-image'>
            <LinkedInIcon />
          </div>
          <div className='header-search'>
            <SearchIcon />
            <input type='text' name='' id='header-input' />
          </div>
        </div>
        <div className='header-right'></div>
      </div>
    </div>
  )
}

export default Header
