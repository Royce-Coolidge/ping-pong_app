import React from 'react'

let Games = ( {games, winner} ) => (
  <>
    <h2>Game History</h2> 
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Winner</th>
          <th scope="col">Winner'sScore</th>
          <th scope="col">Loser</th>
          <th scope="col">Loser's Score</th>
        </tr>
      </thead>
      <tbody>
      { winner === 0 ? null :
           games.map((game, index) => (
            <tr key={ index }>
              <th>Game: { index + 1 }</th>
              <th>Player { game.player_1.won ? 1 : 2 }</th>
              <th>{ game.player_1.won ? game.player_1.score : game.player_2.score }</th>
              <th>Player { !game.player_1.won ? 1 : 2 } </th> 
              <th>{ !game.player_1.won ? game.player_1.score : game.player_2.score }</th>
            </tr>
          ))
        }
      </tbody>
    </table> 
  </>   

)

export default Games;