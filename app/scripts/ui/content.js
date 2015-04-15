'use strict';

var React = require('react'),
    RankList = require('./RankList'),
    AddMatch = require('./AddMatch');

var Content = React.createClass({
    getContent: function() {
        console.log(this.props.show);
        if(this.props.show === 'addPlayer'){
            return <AddMatch players={this.props.players} />;
        }
        return <RankList players={this.props.players} />
    },
    render: function(){
        return this.getContent();
    }
});

module.exports = Content;
