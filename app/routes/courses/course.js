import Route from '@ember/routing/route';
import { dasherize } from '@ember/string';

export default Route.extend({
  model(params) {
    return this.modelFor('courses').badges.filter(badge => { 
      if (badge.courses[0]) {
        return dasherize(badge.courses[0].title) === params.slug;
      }
    });
  }
});
