'use strict';

var React = React = require( 'react');

var Typeahead = React.createClass({
    onChange: function(e){
        console.log(e.target.value);
        this.props.onChange(e);
    },
    render: function() {
        return <input className={this.props.className} value={value} htmlFor={this.props.htmlFor} type="text" id={this.props.id} onChange={this.onChange} />;
    }
});

module.exports = Typeahead;
