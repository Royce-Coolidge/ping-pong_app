import React from 'react'

let Games = ( {games} ) => games.length === 0 ? null :(
  <>
    <h2>Game History</h2> 
    <table className="table">
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
      
           { games.map((game, index) => (
            <tr key={ index }>
              <th>Game: { index + 1 }</th>
              <th>{ game.player_1.won ? game.player_1.name : game.player_2.name }</th>
              <th>{ game.player_1.won ? game.player_1.score : game.player_2.score }</th>
              <th>{ !game.player_1.won ? game.player_1.name : game.player_2.name } </th> 
              <th>{ !game.player_1.won ? game.player_1.score : game.player_2.score }</th>
            </tr>
          ))
        }
      </tbody>
    </table> 
  </>   

)

export default Games;