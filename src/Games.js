import React from 'react'

let Games = ( {games, winner} ) => (

  games === '' ? null :
    <ul className="list-group">
      <h2>Game History</h2> 
      { games.map((game, index) => (
        <li key={ index }>
          <div className="card w-50">  
              <h5 className="card-header">Game: { index + 1 }</h5>
              <p className="card-text ml-3">
                The <b>Winner</b> was Player { game.player_1.won ? 1 : 2 }  
                with the grand score of { game.player_1.won ? game.player_1.score : game.player_2.score }. 
              <br></br>
                The <b>Loser</b> was Player { !game.player_1.won ? 1 : 2 } 
                with the score of { !game.player_1.won ? game.player_1.score : game.player_2.score }.
              
              </p>
          </div> 
        </li>
       )) 
      }
     </ul> 
    
    

    

)

export default Games;