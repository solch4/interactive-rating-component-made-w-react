import React from "react";
import '../styles/ButtonContainer.css'

const ButtonContainer = ({setNum}) => {
  const rate = (n) => setNum(n)
  
  return(
    <div className="button-container">
      <button className="n-button button" id="1" onClick={() => rate(1)}>1</button>
      <button className="n-button button" id="2" onClick={() => rate(2)}>2</button>
      <button className="n-button button" id="3" onClick={() => rate(3)}>3</button>
      <button className="n-button button" id="4" onClick={() => rate(4)}>4</button>
      <button className="n-button button" id="5" onClick={() => rate(5)}>5</button>
    </div>    
  )
}

export default ButtonContainer