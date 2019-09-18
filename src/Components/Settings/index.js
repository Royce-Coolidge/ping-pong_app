import { connect } from "react-redux";
import Settings from "./Settings";
import { postNewGame } from "../../Data/actions/api"

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
      handleSave: value => {dispatch(postNewGame(value))},
  }; 
};


export default connect(mapStateToProps, mapDispatchToProps)(Settings);