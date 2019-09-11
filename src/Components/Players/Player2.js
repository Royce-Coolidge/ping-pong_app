import { connect } from "react-redux"; // this wrapper allows us to interact with the store
import Player from "./Player"; // component we want to wrap
import { incrementPlayer2 } from "../../Data/actions";

let mapStateToProps = state => {
    return {
        player: 2,
        score: state.player2,
        winner: state.winner,
        server: state.server !== 0,  
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        handleIncrement: () => dispatch(incrementPlayer2())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);