import Ember from 'ember';

var Router = Ember.Router.extend({
  location: EmberCatsENV.locationType
});

Router.map(function() {
  this.route('cats', {path: '/'});
});

export default Router;
