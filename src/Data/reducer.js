import initial from'./initial';

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



const winner = state => {
    return{
         ...state,
        winner:
            state.player1 > 20 && state.player2 <= (state.player1 - 2) ? 1 : 
            state.player2 > 20 && state.player1 <= (state.player2 - 2) ? 2 :
            0,
    }
};

const setServer = state => {
    let total = state.player1 + state.player2;
    return {
         ...state, 
         server:
         state.player1 > 20 && state.player2 > 20 ? 
            Math.floor(total / 2) % 2 :
            Math.floor(total / 5) % 2, 
        }
};

const incrementScore= (state, player) => {
    return { ...state, [player]: state[player] + 1, }
}

const reducer = (state, action) => {
   switch (action.type) {
    // using object spread to create a new object
     case "incrementScore": return logGames(winner(setServer(incrementScore(state, action.player)))) 
     case "reset": return {...initial, games: state.games};
     default: return state;
    } 
};

export default reducer;