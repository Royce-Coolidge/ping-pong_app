import { connect } from "react-redux"; // this allows us to interact with the store
import Games from "./Games";

// mapStateToProps: maps the current state (from the store)
// to the props that get passed into the wrapped component
// needs to return an object literal which gets merged in
// to any other props being passed in
let mapStateToProps = (state) => {
    return {
        games: state.games,
    }
};

export default connect(mapStateToProps)(Games);