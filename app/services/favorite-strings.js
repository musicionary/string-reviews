import Ember from 'ember';

export default Ember.Service.extend({
  strings: [],

  add(string) {
    this.get('strings').pushObject(string);
  }
});
