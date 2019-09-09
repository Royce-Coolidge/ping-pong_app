import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from "redux";


//initial state
const initial = {
    player1: 0,
    player2: 0,
    server: 0,
    winner: 0,
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
         state.player1 > 21 || state.player2 > 21 ? Math.floor(total / 2) % 2 :
          Math.floor(total / 5) % 2, }
};

const incrementScore= (state, player) => {
    return { ...state, [player]: state[player] + 1, }
}



const reducer = (state, action) => {
   switch (action.type) {
    // using object spread to create a new object
     case "incrementScore": return winner(setServer(incrementScore(state, action.player))) 
     case "reset": return initial;
     default: return state;
    } 
};

const store = createStore(
    reducer,
    initial,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// subscribe to any changes
let render = () => {
    let state = store.getState();
    ReactDOM.render(
    <App
    scorePlayer1 ={ state.player1 }
    scorePlayer2 ={ state.player2 }
    server ={ state.server }
    winner ={ state.winner }
    handleIncrementPlayer1 = { () => store.dispatch({ type: "incrementScore", player: "player1" })}
    handleIncrementPlayer2 = { () => store.dispatch({ type: "incrementScore", player: "player2" })}
    reset ={() => store.dispatch({ type: "reset" }) }
    />, document.getElementById('root'));
};

store.subscribe(render);

render();

// dispatching an action
