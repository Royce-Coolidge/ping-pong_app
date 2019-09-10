
import React from 'react'

let Message = ( {winner} ) => (

  winner !== 0 ?
    <h2 className="jumbotron">Player { winner } wins!</h2> : null
    

)

export default Message;