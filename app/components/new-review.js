import Ember from 'ember';

export default Ember.Component.extend({
  newReviewForm: false,

  actions: {
    showReviewForm() {
      this.set('newReviewForm', true);
    },

    save() {
      var params = {
        name: this.get('name'),
        date: new Date(),
        title: this.get('title'),
        content: this.get('content'),
        rating: this.get('rating'),
        string: this.get('string'),
      };
      this.set('newReviewForm', false);
      this.sendAction('save', params);
    }
  }
});
