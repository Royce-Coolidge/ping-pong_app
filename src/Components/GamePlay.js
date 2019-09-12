import React from "react";
import Player1 from './Players/Player1';
import Player2 from './Players/Player2';
import Message from './Message/';
import Reset from './Reset/';
import Games from './Games/';

let GamePlay = () => (
    <>
        <div className="row">
            <Player1 />
            <Player2 />
        </div>
        <Message />
        <Reset/>
        <Games />
    </>
)

export default GamePlay;