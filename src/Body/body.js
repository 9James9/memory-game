import React, {useState, useEffect} from 'react'
import './body.css'
import Card from '../Components/Card/card'
import pikachu from '../Images/pikachu.jpg'
import eevee from '../Images/eevee.jpg'
import snorlax from '../Images/snorlax.jpg'
import charizard from '../Images/charizard.jpg'
import charmander from '../Images/charmander.jpg'
import bulbasaur from '../Images/bulbasaur.jpg'
import ditto from '../Images/ditto.jpg'
import gardevoir from '../Images/gardevoir.jpg'
import piplup from '../Images/piplup.jpg'
import mewtwo from '../Images/mewtwo.jpg'
import mew from '../Images/mew.jpg'
import deoxys from '../Images/deoxys.jpg'
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
            let names = {
                0: 'Pikachu',
                1: 'Eevee',
                2: 'Snorlax',
                3: 'Charizard',
                4: 'Charmander',
                5: 'Bulbasaur',
                6: 'Ditto',
                7: 'Gardevoir',
                8: 'Piplup',
                9: 'Mewtwo',
                10: 'Mew',
                11: 'Deoxys',
            }
            let images = {
                0: pikachu,
                1: eevee,
                2: snorlax,
                3: charizard,
                4: charmander,
                5: bulbasaur,
                6: ditto,
                7: gardevoir,
                8: piplup,
                9: mewtwo,
                10: mew,
                11: deoxys,
            }
            let card = [i,names[i],images[i]]
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
            resetScore()
            resetClicked()
            return true
        } else {
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
            Try not to click on the same pokemon twice!
            <p>Score: {score}</p>
            <p>High Score: {highScore}</p>
        </div>
        <div className='body__grid-container'>
            {square.map((card) => {
                return <Card image = {card[2]}name = {card[1]}num = {card[0]}key={card[0]} handleClick={handleClick} square={card[0]}/>
            })}
        </div>
        <div>
        </div>
    </div>
  )
}

export default Body