import { connect } from "react-redux"; // this wrapper allows us to interact with the store
import Player from "./Player"; // component we want to wrap
import { patchScore } from "../../Data/actions/api";

let mapStateToProps = state => {
    return {
        playerName: state.player2Name, 
        score: state.player2,
        winner: state.winner,
        server: state.server !== 0,   
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        handleIncrement: () => dispatch(patchScore(2))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);