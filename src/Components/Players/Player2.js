import { connect } from "react-redux"; // this allows us to interact with the store
import Players from "./Players/Players";

let mapStateToProps = state => {
    return {
        scorePlayer2: state.player2,
        winner: state.winner,
        server: state.server,  
    }
};

export default connect(mapStateToProps)(Players);