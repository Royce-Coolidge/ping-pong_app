import { connect } from "react-redux";
import Settings from "./Settings";
import { save } from "../../Data/actions"

const mapStateToProps = state => {
  return {
    player1Name: state.player1Name,
    player2Name: state.player2Name,
    winningScore: state.winningScore,
    alternate: state.alternate,
  };
};
const mapDispatchToProps = dispatch => {
    return {
      handleSave: value => dispatch(save(value)),
  }; 
};


export default connect(mapStateToProps, mapDispatchToProps)(Settings);