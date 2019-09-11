import { connect } from "react-redux"; // this wrapper allows us to interact with the store
import Player from "./Player"; // component we want to wrap

let mapStateToProps = state => {
    return {
        player: 2,
        score: state.player2,
        winner: state.winner,
        server: state.server !== 0,  
    }
};

export default connect(mapStateToProps)(Player);