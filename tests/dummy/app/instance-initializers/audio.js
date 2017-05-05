export function initialize(appInstance) {
    // appInstance.inject('route', 'foo', 'service:foo');

    console.log(appInstance.lookup('service:service-ambienx'));

    let serviceAmbienx = appInstance.lookup('service:service-ambienx');

    let newAmbienx = new Ambienx({
        audioSrc: 'music.mp3',
        audioLoop: true,
        autoPlay: false,
        enabledLoseFocus: true
    });

    serviceAmbienx.newAmbienx = newAmbienx;

}

export default {
  name: 'audio',
  initialize
};
