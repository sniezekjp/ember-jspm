import Ember from 'ember';
import tpl from '../templates/components/second-comp';
import register from '../utils/register';

var Component = Ember.Component.extend({
	layout: tpl
});

register('second-comp', Component);

export default Component;