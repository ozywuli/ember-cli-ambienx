import Ember from 'ember';

export default Ember.Service.extend({

    init() {

        let self = this;
        self._super(...arguments);

        // GET ENVIRONMENT CONFIG DATA
        let configObject = Ember.getOwner(this).resolveRegistration('config:environment');

        if (configObject.ambienx) {

            // INSTANTIATE `Ambienx` WITH OPTIONS FROM ENVIRONMENT/CONFIG.JS
            let newAmbienx = new Ambienx({
                audioSrc: configObject.ambienx.audioSrc,
                audioLoop: configObject.ambienx.audioLoop,
                autoPlay: configObject.ambienx.audioPlay,
                enabledLoseFocus: configObject.ambienx.enabledLoseFocus
            });

            // SET THE `newAmbienx` SERVICE KEY WITH THE INSTANTIATED `Ambienx` INSTANCE
            self.set('newAmbienx', newAmbienx);

            // AUTOPLAY IF TRUE
            if (configObject.ambienx.autoplay) {
                self.get('newAmbienx').playAudio();
            }

        }

    },


    /*------------------------------------*\
      `newAmbienx` OBJECT
    \*------------------------------------*/
    newAmbienx: null,


    /*------------------------------------*\
      STATE
    \*------------------------------------*/
    isPlaying: false,
    isPauseUserInitiated: false,


    /*------------------------------------*\
      INTERNAL METHODS
    \*------------------------------------*/
    checkPlayState() {
        this.set('isPlaying', this.get('newAmbienx').ambienxState.isPlaying );
        this.set('isPauseUserInitiated', this.get('newAmbienx').ambienxState.isPauseUserInitiated );
    },


    /*------------------------------------*\
      METHODS
    \*------------------------------------*/
    playAudio(options) {
        this.get('newAmbienx').playAudio(options);
        this.checkPlayState();
    },

    pauseAudio(options) {
        this.get('newAmbienx').pauseAudio(options);
        this.checkPlayState();
    },

    fadeInAudio(options) {
        this.get('newAmbienx').fadeInAudio();
        this.checkPlayState();
    },

    fadeOutAudio(options) {
        this.get('newAmbienx').fadeOutAudio(options);
        this.checkPlayState();
    },

    toggleFadeAudio(options) {
        this.get('newAmbienx').toggleFadeAudio(options);
        this.checkPlayState();
    }

});

