import Ember from 'ember';
import tpl from '../templates/application';

var previousTransition;

var Index = Ember.Route.extend({
	beforeModel: function() {
		console.log('before index model');
	},
	actions: {
		willTransition: function(transition) {
			if(previousTransition && previousTransition.targetName === transition.targetName) {
				previousTransition = null;
				return true;
			}
			if(!confirm('r u sure?')) {
				transition.abort();
				previousTransition = transition;
				setTimeout(function() {
					transition.retry();
				}, 2000);
			}
		}
	}
});

export default Index;

Ember.Application.initializer({
	name: 'index-route',
	initialize: function(app) {
		app.register('route:application', Index);
		app.register('template:application', tpl);
	}
});