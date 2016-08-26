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
        date: moment()._d,
        title: this.get('title'),
        content: this.get('content'),
        rating: parseInt(this.get('rating')),
        string: this.get('string'),
      };
      console.log(params.date);
      this.set('newReviewForm', false);
      this.sendAction('save', params);
    }
  }
});
