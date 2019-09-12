import { connect } from "react-redux"; // this allows us to interact with the store
import Reset from "./Reset";
import { reset } from "../../Data/actions/actions";

// mapStateToProps: maps the current state (from the store)
// to the props that get passed into the wrapped component
// needs to return an object literal which gets merged in
// to any other props being passed in
let mapDispatchToProps = (dispatch) => {
    return {
        handleReset: () => dispatch(reset()),
    }
};

export default connect(null, mapDispatchToProps)(Reset);