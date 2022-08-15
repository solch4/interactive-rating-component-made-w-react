import React, { useState } from "react";
import RatingState from "./RatingState";
import ThankyouState from './ThankyouState'
import '../styles/Card.css'

const Card = () => {
  const [displayRatingState, setDisplayRatingState] = useState(true)
  const [displayThankyouState, setDisplayThankyouState] = useState(false)
  const [num, setNum] = useState('')
  
  return(
    <main className="card">
      <RatingState setNum={setNum} displayRatingState={displayRatingState} setDisplayRatingState={setDisplayRatingState} setDisplayThankyouState={setDisplayThankyouState}/>
      <ThankyouState num={num} displayThankyouState={displayThankyouState} setDisplayThankyouState={setDisplayThankyouState} />
    </main>
  )
}

export default Card