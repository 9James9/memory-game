import React, {useState} from 'react'
import './body.css'
const Body = () => {
    const [square, setSquare] = useState({})
    const logValue = e => {
        setSquare()
    }
  return (
    <div>
        <div>
            Try not to click on the same pokemon twice!
        </div>
        <div className='body__grid-container'>
            <div className='body__grid-square' value="1" onClick={(e) => {logValue(e)}}>0</div>
            <div className='body__grid-square'>0</div>
            <div className='body__grid-square'>0</div>
            <div className='body__grid-square'>0</div>
            <div className='body__grid-square'>0</div>
            <div className='body__grid-square'>0</div>
            <div className='body__grid-square'>0</div>
            <div className='body__grid-square'>0</div>
            <div className='body__grid-square'>0</div>
            <div className='body__grid-square'>0</div>
        </div>
    </div>
  )
}

export default Body