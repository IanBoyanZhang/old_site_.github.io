/**
 * First iteration
 * Events: [][]
 * TODO: encode all events into one queue
 */
(function(window) {
  'use strict';

  // Framework
  var Skull = window.Skull = {};

  // Events/Event might be reserve keywords
  // mixins
  var EventManager = Skull.EventManager = (function() {
    return {
      _events: {},
      // _eventNumber may not be necessary
      _eventNumber: 0,
      // bind
      // context is optional
      on: function(evt, callback, context) {
        context = context || this;
        // No overwrite
        if(!Object.hasOwnProperty.call(context._events, evt)) {
          context._events[evt] = [];
        }
        // Encoding event name
        context._eventNumber = context.events[evt].push(callback) - 1;

        // method1
        // return {
        //   remove: function() {
        //      var context = context || this;
        //      delete context._events[evt][context._eventNumber];
        //   }
        // }
      },
      // unbind
      off: function(evt) {
        // provide handle back for removal of topic
        var context = context || this;
        if(Object.hasOwnProperty.call(context._events, evt)) {
          delete context._events[evt];
        }
      },
      trigger: function(events, args) {}
      };
    }());
}({}));
