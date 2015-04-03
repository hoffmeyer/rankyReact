'use strict';

var React = window.React = require('react'),
    $ = require('jquery'),
    Timer = require('./ui/Timer'),
    feed = require('./helpers/feed'),
    mountNode = document.getElementById('app');

feed.playersUpdated(function(data) {
    console.log('subscriber called for playerCreated');
});

var RankList = React.createClass({
  render: function() {
    var createItem = function(player) {
      return <tr key={player.id}><td>{player.id}</td><td>{player.name}</td><td>{player.points}</td></tr>;
    };
    return <table>{this.props.players.map(createItem)}</table>;
  }
});

var RankyApp = React.createClass({
  getInitialState: function() {
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

