import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('admin');
  this.route('string', {path: '/string/:string_id'});
  this.route('favorites');
  this.route('viola');
  this.route('violin');
  this.route('pirastro');
  this.route('thomastik-infeld');
  this.route('larsen');
});

export default Router;
