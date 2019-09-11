import initial from'./initial';

const incrementScore= (state, player) => {
    return { ...state, [player]: state[player] + 1, }
}

const setServer = state => {
    let total = state.player1 + state.player2;
    let alternate = minScore(state) ? 2 : 5
    return {
         ...state, 
         server:Math.floor(total / alternate) % 2 }
};

let minDiff = state => Math.abs(state.player1 - state.player2) >= 2;
let minScore = state =>state.player1 >=21 || state.player2 >=21;
let getWinner = state =>state.player1 > state.player2 ? 1 : 2;

const winner = state => ({
         ...state,
        winner: minDiff(state) && minScore(state) ? getWinner(state) : 0 });

const logGames = state => {
    let player1 = state.player1;
    let player2 = state.player2;
    let games = state.games;
    
    if (state.winner === 0 ) {
        return state;
    } else {
        return {
            ...state,
            games: [...games, {
                    player_1: { 
                        score : player1,
                        won :  player1 > player2,  
                    },
                    player_2: { 
                        score : player2,
                        won : player2 > player1,
                    }
                }]  
            } 
        }
};


const reducer = (state, action) => {
   switch (action.type) {
    // using object spread to create a new object
     case "incrementScore": return logGames(winner(setServer(incrementScore(state, action.player)))) 
     case "reset": return {...initial, games: state.games};
     default: return state;
    } 
};

export default reducer;