import Ember from 'ember';
import ApplicationController from './controllers/application';
import Resolver from './resolver';
import './router';

Ember.AppInstance = Ember.Application.create({
	ApplicationController: ApplicationController,
	LOG_TRANSITIONS: true,
	LOG_TRANSITIONS_INTERNAL: true,
    Resolver: Resolver
});