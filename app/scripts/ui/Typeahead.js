'use strict';

var React = require( 'react');

var Typeahead = React.createClass({
    getInitialState: function(){
        return { value: '' };
    },
    onChange: function(e){
        var players = this.props.players,
            value = e.target.value,
            matchingPlayers;

        matchingPlayers = players.filter(function(element){
            return element.name.toLowerCase().indexOf(value.toLowerCase()) > -1;
        });
        console.log( matchingPlayers.length);
        console.log( value);
        if( value && matchingPlayers.length === 1 ){
            this.setState( { value: matchingPlayers[0].name });
            this.props.onChange(matchingPlayers[0].id);
        } else {
            this.props.onChange(null);
            this.setState( { value: value });
        }
    },
    render: function() {
        return  <div>
                    <input className={this.props.className} value={this.state.value} htmlFor={this.props.htmlFor} type="text" id={this.props.id} onChange={this.onChange} />
                </div>;
    }
});

module.exports = Typeahead;
