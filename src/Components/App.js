import React from "react";
import Header from './Header';
import Player1 from './Players/Player1';
import Player2 from './Players/Player2';
import Message from './Message/';
import Reset from './Reset/';
import Games from './Games/';
import Settings from './Settings/'


const App = () => (
    <React.Fragment>
        <Header />
        <Settings />

        <div className="row">
            <Player1 />
            <Player2 />
        </div>
        <Message />
        <Reset/>
        <Games />
    </React.Fragment>
);

export default App;
