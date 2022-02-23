import React, {useState, useEffect} from 'react'
import './body.css'
import Card from '../Components/Card/card'
const Body = () => {
    const [square, setSquare] = useState([])
    const [score, setScore] = useState(0)
    const [clicked, setClicked] = useState([])
    const [highScore, setHighScore] = useState(0)
    useEffect(() => {
        let cards = loadSquares()
            setSquare(shuffle(cards))
        return () => {
            cards = []
            setSquare(cards)
        }
    },[clicked])
    useEffect(() => {
        return score > highScore ? setHighScore(score) : false
    },[score])
    const loadSquares = e => {
        let cards = []
        for (let i = 0; i < 12; i++) {
            let card = [i,'name']
            cards.push(card)
        }
        return cards
    }
    const handleClick = (e) => {
        let click = e.target.textContent
        console.log(e.target)
        console.log(click)
        checkLoss(click)
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
            <p>Score: {score}</p>
            <p>High Score: {highScore}</p>
            <p>You have clicked: {clicked}</p>
        </div>
        <div className='body__grid-container'>
            {square.map((card) => {
                return <Card num = {card[0]}key={card[0]} handleClick={handleClick} square={card[0]}/>
            })}
        </div>
        <div>
        </div>
    </div>
  )
}

export default Body