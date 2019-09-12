import axios from "../../axios";
import { save } from './actions'

export const postNewGame = ( { player1Name, player2Name, winningScore, alternate} ) => {
	return (dispatch) => {
		axios.post("/", {
            player_1: player1Name,
            player_2: player2Name,
            winning_score: winningScore,
            change_serve: alternate,
        }).then(({ data }) => { 
			// returns a promise, need to use then method
            console.log(data)
            dispatch(save(data.data))
			// now need to write a state action
		})   
	}
}

export const patchScore = ( { player1Name, player2Name, winningScore, alternate} ) => {
	return (dispatch) => {
		axios.post("/:id/scare", {
            player_1: player1Name,
            player_2: player2Name,
            winning_score: winningScore,
            change_serve: alternate,
        }).then(({ data }) => { 
			// returns a promise, need to use then method
            console.log(data)
            dispatch(save(data.data))
			// now need to write a state action
		})   
	}
}