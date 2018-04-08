import Route from '@ember/routing/route';
import fetch from 'fetch';

export default Route.extend({
  model() {
    return fetch('https://teamtreehouse.com/lewismarshall.json').then(response => response.json());
  }
});
