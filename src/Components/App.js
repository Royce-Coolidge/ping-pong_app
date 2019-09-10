import React from "react";
import Header from './Header';
import Players from './Players';
import Message from './Message';
import Reset from './Reset';
import Games from './Games';

const App = ( {games, scorePlayer1, handleIncrementPlayer1, scorePlayer2, handleIncrementPlayer2, reset, server, winner} ) => (
    <React.Fragment>
        <Header />
        <Players
            scorePlayer1={ scorePlayer1 } 
            handleIncrementPlayer1={ handleIncrementPlayer1 }
            scorePlayer2 ={ scorePlayer2 }
            handleIncrementPlayer2 ={ handleIncrementPlayer2 }
            reset ={ reset }
            server ={ server }
            winner ={ winner }
        />
        <Message 
            winner ={ winner }
        />
        <Reset 
            reset ={ reset }
            winner ={ winner }
        />
        <Games 
            games={ games }
        />
    </React.Fragment>
);

export default App;
