(function(window) {
  'use strict';
  var FW = window.FW = {};
  
  var mixin = FW.mixin = {};

  /**
   * EventManager
   * init
   * subscribe
   */
  minxin.eventManager = {
    init: function() {
      this._events = {};
      this._subscriber = {};
    },

    subscribe: function(event, obj) {
      this._subscribe[event] || (this._subscribe[event] = {});
      this._subscriber[event][obj.cId] = obj;
    },
    unsubscribe: function(event, obj) {
      if(!this._subscriber[event]) { return; }
      if(obj && this._subscriber[event][obj.cId]) {
          delete this._subscriber[event][obj.cId];
      } else {
          delete this._subscriber[event];
      }
    },
    isSubscribed: function(event, obj) {
      if(obj && this._subscriber[event][obj.cId]) {
        return !!this._subscriber[event][obj.cId];
      } else {
        return !!this._subscriber[event];
      }
    },
    getSubscribers: function(event, obj) {
      var result = [];

    }
  };
}(window));
