import { connect } from "react-redux"; // this allows us to interact with the store
import Players from "./Players/Players";

// mapStateToProps: maps the current state (from the store)
// to the props that get passed into the wrapped component
// needs to return an object literal which gets merged in
// to any other props being passed in
let mapStateToProps = (state) => {
    return {
        scorePlayer1: state.player1,
        winner: state.winner,
        server: state.server,   
    }
};

export default connect(mapStateToProps)(Players);