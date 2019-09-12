import initial from'./initial';

const incrementScore= (state, player) => {
    return { ...state, [player]: state[player] + 1, }
}

const setServer = state => {
    let total = state.player1 + state.player2;
    let alternate = minScore(state) ? 2 : state.alternate
    return {
         ...state, 
         server:Math.floor(total / alternate) % 2 }
};

let minDiff = state => Math.abs(state.player1 - state.player2) >= 2;
let minScore = state =>state.player1 >=state.winningScore || state.player2 >=state.winningScore;
let getWinner = state =>state.player1 > state.player2 ? 1 : 2;

const winner = state => ({
         ...state,
        winner: minDiff(state) && minScore(state) ? getWinner(state) : 0 });

const logGames = state => {
    let games = state.games;
    if (state.winner === 0 ) {
        return state;
    } else {
        return {
            ...state,
            games: [...games, {
                    player_1: { 
                        name: state.player1Name,
                        score : state.player1,
                        won :  state.player1 > state.player2,  
                    },
                    player_2: {
                        name: state.player2Name, 
                        score : state.player2,
                        won : state.player2 > state.player1,
                    }
                }]  
            } 
        }
};

const save = (state, { id, player1Name, player2Name, winningScore, alternate }) => 
        ({ ...state,
            id: id,
            player1Name: player1Name,
            player2Name: player2Name,
            winningScore: +winningScore,
            alternate: +alternate,
            settings: true,
        });

const reducer = (state, action) => {
   switch (action.type) {
    // using object spread to create a new object
     case "incrementScore": return logGames(winner(setServer(incrementScore(state, action.player)))) 
     case "reset": return {...initial, games: state.games};
     case "save": return save(state, action)
     default: return state;
    } 
};

export default reducer;