import Ember from 'ember';
import './routes/index';
import './routes/homepage'; 

export default Ember.Router.map(function() {
   this.route('index', { path: '/' });
   this.route('homepage');
   this.route('other');
});