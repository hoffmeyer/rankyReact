'use strict';

var socket = require('socket.io-client')('http://ranky-dev.herokuapp.com');

var feed = (function() {

    return {
        playerCreated: function(callback) {
            socket.on('playerCreated', function(data) {
                callback(data);
            });
        },
        playersUpdated: function(callback) {
            socket.on('playersUpdated', function(data) {
                callback(data);
            });
        }
    };
})();

module.exports = feed;
