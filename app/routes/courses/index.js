import Route from '@ember/routing/route';

export default Route.extend({
  setupController(controller, model) {
    this._super(...arguments);

    const courses = new Set(model.badges.map(badge => {
      if (badge.courses[0]) {
        return badge.courses[0].title;
      }
    }));

    controller.set('courses', Array.from(courses).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase())));
  }
});
