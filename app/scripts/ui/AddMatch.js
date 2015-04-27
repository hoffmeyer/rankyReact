'use strict';

var React = require('react');

var AddMatch = React.createClass({
    render: function(){
        return <form className="form-horizontal" >
                <h3>Team1</h3>
                <div className="form-group">
                    <label className="col-sm-2 control-label" for="team1player1">Player 1</label>
                    <div className="col-sm-10">
                        <input className="form-control" type="text" id="team1player1" autoFocus="true" />
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-2 control-label" for="team1player2">Player 2</label>
                    <div className="col-sm-10">
                        <input className="form-control" type="text" id="team1player2"/>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-2 control-label" for="team1score">Score</label>
                    <div className="col-sm-2">
                        <input className="form-control" type="text" id="team1score"/>
                    </div>
                </div>

                <h3>Team2</h3>
                <div className="form-group">
                    <label className="col-sm-2 control-label" for="team2player1">Player 1</label>
                    <div className="col-sm-10">
                        <input className="form-control" type="text" id="team2player1" />
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-2 control-label" for="team2player2">Player 2</label>
                    <div className="col-sm-10">
                        <input className="form-control" type="text" id="team2player2"/>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-2 control-label" for="team2score">Score</label>
                    <div className="col-sm-2">
                        <input className="form-control" type="text" id="team2score"/>
                    </div>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary pull-right" >Register</button>
                </div>
            </form>

    }
});

module.exports = AddMatch;
