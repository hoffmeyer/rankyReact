'use strict';

var React = require('react'),
    RankList = require('./RankList'),
    AddMatch = require('./AddMatch');

var Content = React.createClass({
    getContent: function() {
        if(this.props.show === 'addScore'){
            return <AddMatch players={this.props.players} source={this.props.source}/>;
        }
        return <RankList players={this.props.players} />
    },
    render: function(){
        return this.getContent();
    }
});

module.exports = Content;
