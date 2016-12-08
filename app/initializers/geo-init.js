export function initialize(application) {
  	const geo = navigator.geolocation;
	application.deferReadiness();
	geo.getCurrentPosition((pos) => {
		let pt = pos.coords;
		let loc = {
			lng: pt.longitude,
			lat: pt.latitude
		}
		application.register('data:location', loc, {
			instantiate: false
		});
		application.advanceReadiness();
	});
}

export default {
  name: 'geo-init',
  initialize
};
