import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string')
});

Ember.Store = DS.Store.extend({
  url: 'http://ember-cats.dev/cats.json'
});
