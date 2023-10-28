import React from 'react'


function Game({ updateHealth }) {
  const fightOrcs = () => updateHealth(-20)
  const haveBreakfest = () => updateHealth(30)
    return <div>
      <button onClick = {fightOrcs}>fightOrcs</button>
      <button onClick = {haveBreakfest}>Eat</button>
    </div>
  }
  
  export default Game
  