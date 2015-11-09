import Ember from 'ember';

export default Ember.DefaultResolver.extend({
  
  resolveRoute: function() {
    //console.log(arguments);
  },

  resolveTemplate: function() {
    //console.log(arguments);
    //return this._super.apply(this, arguments);
  }
});