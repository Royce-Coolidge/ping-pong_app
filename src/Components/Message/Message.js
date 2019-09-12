
import React from 'react'


let Message = ( {winner, player} ) => (

  winner === 0 ? null :
      <h2 className="jumbotron">{ player } wins!</h2> 

      )


export default Message;