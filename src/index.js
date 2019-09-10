import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import store from'./Data/store';
import reducers from "./Data/reducers";
import { Provider } from "react-redux";

// subscribe to any changes

ReactDOM.render( // completely recontructs the app component
    <Provider store={ store }>
        <App
            handleIncrementPlayer1 = { () => store.dispatch({ type: "incrementScore", player: "player1" })}
            handleIncrementPlayer2 = { () => store.dispatch({ type: "incrementScore", player: "player2" })}
            reset ={() => store.dispatch({ type: "reset" }) }
        />
    </Provider>, 
    document.getElementById('root') // attaches it all to the index.html
);
