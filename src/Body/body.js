import React, {useState, useEffect} from 'react'
import './body.css'
import Card from '../Components/Card/card'
const Body = () => {
    const [square, setSquare] = useState([])
    const [score, setScore] = useState(0)
    const [clicked, setClicked] = useState([])
    //figure out how to initialize the squares array as state instead of a global array that won't update dynamically
    let squares = []
    const initialize = () => {
        for (let i = 0; i < 9; i++) {
            squares.push({i})
        }
    }
    initialize()
    const addSquares = e => {
        setSquare(square.concat('test'))
        console.log(square)
    }
    useEffect(() => {

        for (let i = 0; i < 9; i++) {
            setSquare(square.concat('test'))
        }

    },[])
    // useEffect(() => {
    //     setSquare(shuffle(squares))
    // },[])
    const handleClick = (e) => {
        // let click = e.target.parentNode.firstChild.textContent
        let click = e.target.textContent
        console.log(e.target)
        console.log(click)
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
    const shuffle = e => {
        return [...e].sort(() => Math.random() - 0.5)
    }
  return (
    <div>
        <div>
            Try not to click on the same number twice!
        </div>
        <div className='body__grid-container'>
            {squares.map((square) => {
                return <Card key={square.i} handleClick={handleClick} square={square}/>
            })}
            <p>Score: {score}</p>
            <p>You have clicked: {clicked}</p>
        </div>
        <div>{square}</div>
    </div>
  )
}

export default Body