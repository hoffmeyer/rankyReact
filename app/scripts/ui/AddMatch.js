'use strict';

var React = require('react');

var AddMatch = React.createClass({
    render: function(){
        return <form className="form-horizontal" >
                <h3>Team1</h3>
                <div className="form-group">
                    <label className="col-sm-2 control-label" htmlFor="team1player1">Player 1</label>
                    <div className="col-sm-10">
                        <input className="form-control" type="text" id="team1player1" onChange={this.onTeam1Player1Change} autoFocus="true" />
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-2 control-label" htmlFor="team1player2">Player 2</label>
                    <div className="col-sm-10">
                        <input className="form-control" type="text" id="team1player2" onChange={this.onTeam1Player2Change}/>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-2 control-label" htmlFor="team1score">Score</label>
                    <div className="col-sm-2">
                        <input className="form-control" type="text" id="team1score" onChange={this.onTeam1ScoreChange}/>
                    </div>
                </div>

                <h3>Team2</h3>
                <div className="form-group">
                    <label className="col-sm-2 control-label" htmlFor="team2player1">Player 1</label>
                    <div className="col-sm-10">
                        <input className="form-control" type="text" id="team2player1" onChange={this.onTeam2Player1Change}/>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-2 control-label" htmlFor="team2player2">Player 2</label>
                    <div className="col-sm-10">
                        <input className="form-control" type="text" id="team2player2" onChange={this.onTeam2Player2Change}/>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-2 control-label" htmlFor="team2score">Score</label>
                    <div className="col-sm-2">
                        <input className="form-control" type="text" id="team2score" onChange={this.onTeam2ScoreChange}/>
                    </div>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary pull-right" onClick={this.handleClick} >Register</button>
                </div>
            </form>
    },
    onTeam1Player1Change: function( event ){
        this.setState({team1player1: event.target.value});
    },
    onTeam1Player2Change: function( event ){
        this.setState({team1player2: event.target.value});
    },
    onTeam1ScoreChange: function(event){
        this.setState({team1Score: event.target.value});
    },
    onTeam2Player1Change: function( event ){
        this.setState({team2player1: event.target.value});
    },
    onTeam2Player2Change: function( event ){
        this.setState({team2player2: event.target.value});
    },
    onTeam2ScoreChange: function(event){
        this.setState({team1Score: event.target.value});
    },
    handleClick: function(e){
        e.preventDefault();
        console.log(this.state);
    }
});

module.exports = AddMatch;
