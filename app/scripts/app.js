'use strict';

var React = window.React = require('react'),
    $ = require('jquery'),
    Timer = require('./ui/Timer'),
    feed = require('./helpers/feed'),
    mountNode = document.getElementById('app');

var RankList = React.createClass({
  render: function() {
    var createItem = function(player, index) {
      return <tr key={player.id}><td>{index + 1}</td><td>{player.name}</td><td>{player.points}</td></tr>;
    };
    return <table>{this.props.players.map(createItem)}</table>;
  }
});

var RankyApp = React.createClass({
  updateWithPlayer: function(player){
      var players = this.state.players;
      var newPlayers = players.filter(function(e){
        return e.id !== player.id;
      });
      newPlayers.push(player);
      newPlayers.sort(function(a, b){
          return b.points - a.points;
      });
      this.setState({players: newPlayers});
  },
  getInitialState: function() {
    var _this = this;
    feed.playersUpdated(function(players){
      players.map(function(player){
        _this.updateWithPlayer(player);
      });
    }.bind(this));
    feed.playerCreated(function(player){
      this.updateWithPlayer(player);
    }.bind(this));
    return {players: []};
  },
  componentDidMount: function() {
      $.get(this.props.source + '/list', function(result){
          if(this.isMounted()) {
              this.setState({
                  players: result
              })
          }
      }.bind(this));
  },
  render: function() {
    return (
      <div>
        <h3>The list</h3>
        <RankList players={this.state.players} />
        <Timer />
      </div>
    );
  }
});


React.render(<RankyApp source='http://ranky-dev.herokuapp.com' />, mountNode);

