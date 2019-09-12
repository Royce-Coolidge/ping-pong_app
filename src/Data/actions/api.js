import axios from "../../axios";
import { save } from './actions'
import { incrementScore } from './actions'

export const postNewGame = ( { player1Name, player2Name, winningScore, alternate} ) => {
	return (dispatch) => {
		axios.post("/", {
            player_1: player1Name,
            player_2: player2Name,
            winning_score: winningScore,
            change_serve: alternate,
        }).then(({ data }) => { 
			// returns a promise, need to use then method
            dispatch(save(data.data))
			// now need to write a state action
		})   
	}
}

export const patchScore = player => (dispatch, getState) => {
		axios.patch(`${ getState().id }/score`, {
            player: player,
            
        }).then(({ data }) => { 
			// returns a promise, need to use then method
            console.log(player)
            dispatch(incrementScore(player))
			
	    })   
}
