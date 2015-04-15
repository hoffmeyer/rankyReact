'use strict';

var React = require('react');

var AddMatchButton = React.createClass({
    handleClick: function(){
        this.props.buttonClicked('addPlayer');
    },
    render: function(){
        return (
          <a className="btn btn-primary pull-right" onClick={this.handleClick} >Add Score</a>
        );
    }
});

module.exports = AddMatchButton;
