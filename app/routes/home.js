import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return $.getJSON('https://teamtreehouse.com/lewismarshall.json');
  },

  setupController(controller, model) {
    this._super(...arguments);
    controller.set('firstName', model.name.split(' ', 1));
    controller.set('latestBadgeId', model.badges[model.badges.length - 1].id);
  }
});
