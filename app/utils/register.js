import Ember from 'ember';

export default function register(key, component) {
	Ember.Application.initializer({
	  name: key + '-initializer',
	  initialize: function(container) {
	    container.register('component:' + key, component);
	  }
	});
	return component;
}

Ember.Application.instanceInitializer({
	name: 'container-grab',
	initialize: function(app) {
		Ember.c = app;
	}
});