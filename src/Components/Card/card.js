import React from 'react'
import './card.css'
const Card = ({name, num, square, handleClick}) => {
  return (
    <div name ={square.i} className='card__container' onClick={handleClick}>
        {/* <div>{square.i}</div> */}
        <div>{num}</div>
        <div>{name}</div>
    </div>
  )
}

export default Card