import DS from 'ember-data';

export default DS.Model.extend({
  brand: DS.attr(),
  name: DS.attr(),
  instrument: DS.attr(),
  winding: DS.attr(),
  core: DS.attr(),
  size: DS.attr(),
  gauge: DS.attr(),
  end: DS.attr(),
  price: DS.attr(),
  image: DS.attr()
});
