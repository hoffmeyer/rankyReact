'use strict';

var React = require('react/addons');

var NavigationItem = React.createClass({
    handleClick: function(){
        this.props.onNavigate(this.props.destination);
    },
    render: function() {
        var classes = '';
        console.log(this.props.destination + ' vs ' + this.props.currentPage);
        if( this.props.destination === this.props.currentPage){
            classes = 'active';
        }
        return <li className={classes} ><a onClick={this.handleClick}>{this.props.name}</a></li>
    }
});

module.exports = NavigationItem;
