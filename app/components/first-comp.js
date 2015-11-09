import Ember from 'ember';
import tpl from '../templates/components/first-comp';
import register from '../utils/register';
import './second-comp';

var Component = Ember.Component.extend({
	needs: ['component:second-comp'],
	layout: tpl,
	greeting: 'hello world'
});

register('first-comp', Component);

export default Component;