'use strict';

var React = window.React = require('react'),
    $ = require('jquery'),
    Navigation = require('./ui/Navigation'),
    Content = require('./ui/Content'),
    feed = require('./helpers/feed'),
    mountNode = document.getElementById('app');


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
    return {players: [], currentPage: 'list'};
  },
  componentDidMount: function() {
      $.get(this.props.source + '/list', function(result){
          if(this.isMounted()) {
              this.setState({
                  players: result
              });
          }
      }.bind(this));
  },
  pages: function(){
      return {
          list: 'The List',
          addScore: 'Add score',
          addPlayer: 'Add player'
      };
  },
  onNavigate: function(newPlace){
      this.setState({
          currentPage: newPlace
      });
  },
  render: function() {
    return (
          <div className="container">
            <div className="">
              <h1>Ranky</h1>
              <p className="lead" >Scoring the elite</p>
            </div>
            <Navigation onNavigate={this.onNavigate} pages={this.pages()} currentPage={this.state.currentPage}/>
            <div>
              <Content onNavigate={this.onNavigate} show={this.state.currentPage} players={this.state.players} source={this.props.source}/>
            </div>
          </div>
    );
  }
});


React.render(<RankyApp source='http://ranky-dev.herokuapp.com' />, mountNode);

