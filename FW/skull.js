/**
 * First iteration
 * Events: [][]
 * TODO: encode all events into one queue
 */
(function(window) {
  'use strict';
  var _ = window._;
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

      // args: []
      trigger: function(evt, args) {
        if(!Object.hasOwnProperty.call(this._events, evt)) { return; }

        // Cycle through the queue
        _.each(this._events[evt], function(info) {
          info.call(this, args);
        }, this);
      }
    };
  }());

  var View = Skull.View = (function() {
    return {
    };
  }());

  var Model = Skull.Model = (function() {
    return {
    
    };
  }());

  var Controller = Skull.Controller = (function() {
    return {
    
    };
  }());

}(window));
