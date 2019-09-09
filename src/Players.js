import React from "react";

let Players = ( {scorePlayer1, handleIncrementPlayer1, scorePlayer2, handleIncrementPlayer2, winner, server} ) => (
    <div className="row">
    <div className="col-xs-6">
        <p>Player 1 { server === 0 ? <span className="pull-right label label-success">Serving</span> : null }</p>
        <p className="well">{ scorePlayer1 }</p>
        { winner !== 0 ? null : 
        <button  onClick={ handleIncrementPlayer1 } className="btn btn-primary">+</button>}
    </div>

    <div className="col-xs-6">
        <p>Player 2 { server === 1 ? <span className="pull-right label label-success">Serving</span> : null }</p>
        <p className="well">{ scorePlayer2 }</p>
        { winner !== 0 ? null :
        <button onClick={ handleIncrementPlayer2 } className="btn btn-primary">+</button>}
    </div>
</div>
);

export default Players;