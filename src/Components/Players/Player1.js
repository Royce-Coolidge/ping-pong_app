import { connect } from "react-redux"; // this allows us to interact with the store
import Player from "./Player";

// mapStateToProps: maps the current state (from the store)
// to the props that get passed into the wrapped component
// needs to return an object literal which gets merged in
// to any other props being passed in
let mapStateToProps = (state) => {
    return {
        player: 1,
        score: state.player1,
        winner: state.winner,
        server: state.server === 0,   
    }
};

let mapDispatchtoProps = (dispatch) => {
    return {
        handleIncrement= { handleIncrementPlayer1 }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);