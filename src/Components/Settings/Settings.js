import React, { Component } from "react";

class Settings extends Component {
  
    constructor(props) {
    super(props);
    this.state = {
        player1Name: props.player1Name,
        player2Name: props.player2Name,
        winningScore: props.winningScore,
        alternate: props.alternate,
    }
    this.handlePlayer1NameChange = this.handlePlayer1NameChange.bind(this);
    this.handlePlayer2NameChange = this.handlePlayer2NameChange.bind(this);
    this.handleWinScoreChange = this.handleWinScoreChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAlt = this.handleAlt.bind(this);
  }

    handlePlayer1NameChange(e) {
        this.setState({ player1Name: e.currentTarget.value });
    }

    handlePlayer2NameChange(e) {
        this.setState({ player2Name: e.currentTarget.value });
    }

    handleWinScoreChange(e) {
        this.setState({ winningScore: e.currentTarget.value });
    }
        
    handleAlt(e) {
        this.setState({ alternate: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.handleSave(this.state);
    }
    
    
    render() {
        let { player1Name, player2Name, winningScore, alternate } = this.state;
        return (
            <form onSubmit={ this.handleSubmit }>
                <div className="form-group">
                    <label>Player 1 Name</label>
                    <input
                    className="form-control"
                    onChange={ this.handlePlayer1NameChange }
                    value={ player1Name }
                    /> 
                </div>
                <div className="form-group">
                    <label>Player 2 Name</label>
                    <input
                    className="form-control"
                    onChange={ this.handlePlayer2NameChange }
                    value={ player2Name }
                    /> 
                </div>
                <div className="form-group">
                    <label>Winning Score</label>
                    <input
                    type="number"
                    className="form-control"
                    onChange={ this.handleWinScoreChange }
                    value={ winningScore }
                    /> 
                </div>
                <div className="form-group">
                    <label>Alternate Every</label>
                    <input
                    type="number"
                    className="form-control"
                    onChange={ this.handleAlt }
                    value={ alternate }
                    /> 
                </div>
                <button className="btn btn-primary">Save</button>
            </form>
        ); 
    }
}

export default Settings;