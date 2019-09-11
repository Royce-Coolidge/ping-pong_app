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
        player: "player1",
    }
};

export const incrementPlayer2 = () => {
    return {
        type: "incrementScore",
        player: "player2",
    }
};

export const save = ({player1Name, player2Name, winningScore, alternate}) => {
    return {
      type: "save",
      player1Name: player1Name,
      player2Name: player2Name,
      winningScore: +winningScore,
      alternate: +alternate,
    };
 };

