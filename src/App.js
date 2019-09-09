import React from "react";

const App = ( {scorePlayer1, handleIncrementPlayer1, scorePlayer2, handleIncrementPlayer2, reset, server, winner} ) => (
    <React.Fragment>
        {/* header */}
        <header className="page-header">
            <h1>PongPing</h1>
        </header>

        {/* scores */}
        <div className="row">
            <div className="col-xs-6">
                <p>Player 1 { server === 0 ? <span className="pull-right label label-success">Serving</span> : null }</p>
                <p className="well">{ scorePlayer1 }</p>
                <button  onClick={ handleIncrementPlayer1 } className="btn btn-primary">+</button>
            </div>

            <div className="col-xs-6">
                <p>Player 2 { server === 1 ? <span className="pull-right label label-success">Serving</span> : null }</p>
                <p className="well">{ scorePlayer2 }</p>
                <button onClick={ handleIncrementPlayer2 } className="btn btn-primary">+</button>
            </div>
        </div>

        { winner !== 0 ?
        <h2 className="jumbotron">Player { winner } wins!</h2> : null
        }

        <hr />

        { /* reset button */}
        <button onClick={ reset } className="btn btn-danger">Reset</button>
    </React.Fragment>
);

export default App;
