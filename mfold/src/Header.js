import React from 'react'

const Header = () => {
  return (
    <div className='header'>
      <div className="header__left">
        <img className='header__leftLogo' 
            src="https://pngimg.com/uploads/twitch/twitch_PNG6.png"
            alt="twich logo"
        />
        <h2>Following</h2>
        <h2>Browse</h2>
        <div className="header__verticalLine"></div>
        <h2>Esports</h2>
        <h2>Music</h2>
        <i class="fa-solid fa-ellipsis"></i>
      </div>
      <div className="header__center">
        <input type="text" placeholder='search' />
      </div>
      <div className="header__right">
        <div className="header__centerLogoContainer">
        <i class="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
    </div>
  )
}

export default Header
