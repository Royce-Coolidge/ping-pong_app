import React from "react";


let Player = ( {player, score, handleIncrement, winner, server} ) => (
    <div className="col-xs-6">
        <p>Player { player } { server ? 
        <span className="pull-right label label-success">Serving</span> : null }</p>
        <p className="well">{ score }</p>
        { winner !== 0 ? null : 
        <button  onClick={ handleIncrement } className="btn btn-primary">+</button>}
    </div>
);

export default Player;