import React from "react";
import Header from './Header';
import Players from './Players';
import Message from './Message';
import Reset from './Reset';

const App = ( {scorePlayer1, handleIncrementPlayer1, scorePlayer2, handleIncrementPlayer2, reset, server, winner} ) => (
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
        />
        
    </React.Fragment>
);

export default App;
