import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save(params) {
      var newString = this.store.createRecord('string', params);
      newString.save();
      this.transitionTo('index');
    }
  }
});
