import Ember from 'ember';
import App from '../app';
//import tpl from '../templates/homepage';
var registered = {};

var Homepage = Ember.Route.extend({
	beforeModel: function() {
		console.log('before hp model hook');
		return System.import('app/templates/homepage').then(function(m) {
			Ember.AppInstance.register('template:homepage', m['default']);
		});
	}
});

export default Homepage;

Ember.Application.initializer({
	name: 'homepage-route',
	initialize: function(app) {
		app.register('route:homepage', Homepage);
	}
});