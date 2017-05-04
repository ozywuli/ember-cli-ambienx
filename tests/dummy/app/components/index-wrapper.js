import Ember from 'ember';
import layout from '../templates/components/index-wrapper';

export default Ember.Component.extend({layout,
    /*------------------------------------*\
      INIT
    \*------------------------------------*/
    init() {
        this._super(...arguments);
    },


    /*------------------------------------*\
      DID INSERT ELEMENT
    \*------------------------------------*/
    didInsertElement: function() {
        let self = this;
        Ember.run.scheduleOnce('afterRender', function() {
            // self.get('serviceAmbienx').playAudio();
        });
    }


}); // END `Ember.Component.extend`
