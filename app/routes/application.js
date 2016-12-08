import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
import { default as math, PI } from 'math';

const { Route, inject, computed, getOwner } = Ember;

export default Route.extend(ApplicationRouteMixin, {
	location: computed({
		get() {
			let owner = getOwner(this);
		 	let location = owner.lookup('data:location');
			return location;
		}
	}),

	setupController: function(controller) {
	  controller.set('location', Ember.get(this, 'location'));
  	},

    session: inject.service(),
    actions: {
        logout() {
            this.get('session').invalidate();
        }
    }
});