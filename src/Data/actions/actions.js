// a change action creator
// accepts an amount variable so we can change it easily
export const reset = () => {
    return {
      type: "reset",
    }
};
  
export const incrementScore = ( player ) => {
    return {
    type: "incrementScore", 
    player: "player"+player ,
   
  }
};

export const save = ({id, player_1, player_2, winning_score, change_serve}) => {
    return {
      type: "save",
      id: id,
      player1Name: player_1.name,
      player2Name: player_2.name,
      winningScore: +winning_score,
      alternate: +change_serve,
    };
 };

