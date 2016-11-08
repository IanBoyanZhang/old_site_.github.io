/**
 * First iteration
 * Events: [][]
 * TODO: encode all events into one queue
 */
(function(window) {
  'use strict';
  window.$ = window.jquery || document.querySelectorAll.bind(document);
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

  // Each instance
  var View = Skull.View = function(options) {
      this.id = _.uniqueId('view');
      _.extend(this, options);
  };

  _.extend(View.prototype, EventManager);

  // All typess of method
  var Model = Skull.Model = function() {
      this.id = _.uniqueId('model');
      this.attributes = attributes || {};
  };

  // Prototype definition
  (function(obj) {
    obj.set = function() {
      if (_.isObject(attrs)) {
        _.extend(this.attributes, attrs);
        this.change(this.attributes);
      }
      return this;
    };

    obj.get = function() {
      return this.attributes[attrName];
    };
    obj.toJSON = function() {
      return _.clone(this.attributes);
    };

    // helper function announce changes to the Model
    // and passes the new data
    obj.change = function() {
      return this.trigger(this.id + 'update', attrs);
    };

  }(Model.prototype));

  _.extend(Model.prototype, EventManager);

  var Controller = Skull.Controller = function(options) { 
    // Similar to View extension
    this.id = _.uniqueId('controller');
    _.extend(this, options);

  };

}(window));
