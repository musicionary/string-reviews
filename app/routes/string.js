import Ember from 'ember';

export default Ember.Route.extend({
  favoriteStrings: Ember.inject.service(),
  model(params) {
    return this.store.findRecord('string', params.string_id);
  },

  actions: {
    save(params) {
      var newReview = this.store.createRecord('review', params);
      var string = params.string;
      string.get('reviews').addObject(newReview);
      newReview.save().then(function () {
        return string.save();
      });
      this.transitionTo('string', params.string);
    },

    addToFavorites(string) {
      this.get('favoriteStrings').add(string);
    }
  }
});
