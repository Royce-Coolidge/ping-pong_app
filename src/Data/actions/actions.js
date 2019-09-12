// a change action creator
// accepts an amount variable so we can change it easily
export const reset = () => {
    return {
      type: "reset",
    }
};
  
export const incrementPlayer1 = () => {
    return {
    type: "incrementScore", 
    player: "player1",}
};

export const incrementPlayer2 = () => {
    return {type: "incrementScore", player: "player2",}
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

