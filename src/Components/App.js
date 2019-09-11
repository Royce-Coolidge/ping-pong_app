import React from "react";
import Header from './Header';
import Player1 from './Players/Player1';
import Player2 from './Players/Player2';
import Message from './Message/';
import Reset from './Reset/';
import Games from './Games/';


const App = ( {handleIncrementPlayer1,  handleIncrementPlayer2, handleReset} ) => (
    <React.Fragment>
        <Header />

        <div className="row">
            <Player1 handleIncrement= { handleIncrementPlayer1 }/>
            <Player2 handleIncrement= { handleIncrementPlayer2 }/>
        </div>

        <Message />
        <Reset reset ={ handleReset }/>
        <Games />
    </React.Fragment>
);

export default App;
