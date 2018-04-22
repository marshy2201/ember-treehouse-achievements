import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return $.getJSON('https://teamtreehouse.com/lewismarshall.json');
  },

  redirect(model, transition) {
    if (transition.targetName === "index") {
      this.replaceWith('home');
    }
  }
});
