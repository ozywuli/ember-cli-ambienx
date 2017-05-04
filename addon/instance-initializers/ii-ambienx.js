export function initialize( applicationInstance ) {
    // appInstance.inject('route', 'foo', 'service:foo');

    // Access the bg-music.js service
    const serviceAmbienx = applicationInstance.lookup('service:service-ambienx');

}

export default {
  name: 'ii-ambienx',
  initialize
};
