import React, {useState} from 'react'
import './body.css'
import Card from '../Components/Card/card'
const Body = () => {
    const [square, setSquare] = useState({})
    const [score, setScore] = useState(0)
    const [clicked, setClicked] = useState([])
    let squares = []
    for (let i = 0; i < 9; i++) {
        let name = 'hello world'
        let clicked = 'false'
        squares.push({i,name,clicked})
    }

    const handleClick = (e) => {
        let click = e.target.parentNode.firstChild.textContent
        checkLoss(click)
        // clicked.push(click)
        // console.log(clicked)
        // console.log(click)

        checkLoss(click) ? console.log('loss') : setClicked((prevState) => [...prevState, click])
    }
    const checkLoss = e => {
        if (clicked.includes(e)) {
            console.log('loser lol')
            resetScore()
            resetClicked()
            return true
        } else {
            console.log('score increases by 1')
            increaseScore()
            return false
        }
    }
    const increaseScore = () => {
        setScore(score + 1)
    }
    const resetScore = () => {
        setScore(0)
    }
    const resetClicked = () => {
        setClicked([])
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
            <p>Score: {score}</p>
            <p>You have clicked: {clicked}</p>
        </div>
    </div>
  )
}

export default Body