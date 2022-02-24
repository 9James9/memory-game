import React from 'react'
import './card.css'
const Card = ({image, name, num, square, handleClick}) => {
  return (
    <div name ={square.i} className='card__container' onClick={handleClick}>
        <div className='card__name'>{name}</div>
        <img className="card__image" src={image}></img>
    </div>
  )
}

export default Card