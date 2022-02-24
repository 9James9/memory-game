import React from 'react'
import pokeball from '../Images/pokeball.png'
import './header.css'
const Header = () => {
  return (
    <div className='header__container'>
      <h1 className='header__title'>Pokemon Memory Game</h1>
      <img className="header__pokeball-image" src={pokeball} alt="pokeball"></img>
    </div>
  )
}

export default Header