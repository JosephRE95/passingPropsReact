import React from 'react'



function Stats({ healthPoints }) {
    const color = healthPoints > 20 ? 'blue' : 'orange'
    return <div>
        <h2 style={ {color} }>Health is at {healthPoints} </h2>
    </div>
  }
  
  export default Stats
  