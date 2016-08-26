import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.query('string', {
      orderBy: 'brand',
      equalTo: 'Thomastik-Infeld'
    });
  }
});
