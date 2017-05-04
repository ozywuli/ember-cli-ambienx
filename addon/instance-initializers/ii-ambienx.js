export function initialize( appInstance ) {
    // appInstance.inject('route', 'foo', 'service:foo');

    appInstance.inject('component', 'serviceAmbienx', 'service:service-ambienx');

    // Access the bg-music.js service
    const serviceAmbienx = appInstance.lookup('service:service-ambienx');

}

export default {
  name: 'ii-ambienx',
  initialize
};
