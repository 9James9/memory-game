import React, {useState} from 'react'
import './body.css'
import Card from '../Components/Card/card'
const Body = () => {
    const [square, setSquare] = useState({})
    const logValue = e => {
        setSquare()
    }
    let squares = []
    for (let i = 0; i < 9; i++) {
        let name = 'hello world'
        let clicked = 'false'
        squares.push({i,name,clicked})
    }
    let clicked = []
    const handleClick = (e) => {
        let click = console.log(e.target.parentNode.firstChild.textContent)
        clicked.push(e.target.parentNode.firstChild.textContent)
        console.log(clicked)
    }
  return (
    <div>
        <div>
            Try not to click on the same pokemon twice!
        </div>
        <div className='body__grid-container'>
            {squares.map((square) => {
                return <Card key={square.i} handleClick={handleClick} square={square}/>
            })}
        </div>
    </div>
  )
}

export default Body