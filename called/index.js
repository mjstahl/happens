module.exports = function(compute) {
  var handlers = [];

  var fn = function() {
    var result = compute.apply(this, arguments);
    // Ensure the subscriber's handlers are called after the
    // result is returned to the caller
    var self = this;
    setTimeout(function() {
      handlers.forEach(function(handler) {
        handler.call(self, result);
      });
    }, 0);

    return result;
  };

  fn.subscribe = function(callback, errback) {
    handlers.push(callback);
    // Return the method of unsubscribing as a result of
    // subscribing
    return function() {
      handlers.splice(handlers.indexOf(callback) >>> 0, 1);
      return true;
    };
  };

  return fn;
};