import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import SearchIcon from '@mui/icons-material/Search'
import './Header.css'

function Header() {
  return (
    <div className='header'>
      <div className='header-left'>
        <div className='header-image'>
          <LinkedInIcon />
        </div>
        <div className='header-search'>
          <SearchIcon />
          <input type='text' name='' id='header-input' placeholder='search' />
        </div>
      </div>
      <div className='header-right'></div>
    </div>
  )
}

export default Header
