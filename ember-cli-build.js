/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var Filter = require('broccoli-filter');

module.exports = function(defaults) {
    var app = new EmberApp(defaults, {
        // Add options here
    });

	function MyFilter(inputNode) {
		Filter.call(this, inputNode);
	}

	MyFilter.prototype = Object.create(Filter.prototype);

	MyFilter.prototype.processString = function(existingString) {		
		return existingString;
	}

    return new MyFilter(app.toTree());
};
