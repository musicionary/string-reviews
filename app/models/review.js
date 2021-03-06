import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  date: DS.attr(),
  title: DS.attr(),
  content: DS.attr(),
  rating: DS.attr(),
  string: DS.belongsTo('string', {async: true})
});
