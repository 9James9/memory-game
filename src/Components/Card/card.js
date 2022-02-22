import React from 'react'
import './card.css'
const Card = ({square, handleClick}) => {
  return (
    <div className='card__container' onClick={handleClick}>
        {console.log(square)}
        <div>{square.i}</div>
        <div>{square.clicked}</div>
    </div>
  )
}

export default Card