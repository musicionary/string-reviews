import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      var params = {
        brand: this.get('brand'),
        name: this.get('name'),
        instrument: this.get('instrument'),
        winding: this.get('winding'),
        core: this.get('core'),
        size: this.get('size'),
        gauge: this.get('gauge'),
        end: this.get('end'),
        price: this.get('price'),
        image: this.get('image')
      };
      this.sendAction('save', params);
    }
  }
});
