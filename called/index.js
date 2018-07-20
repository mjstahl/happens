module.exports = function(compute) {
  var handlers = [];

  var fn = function() {
    var error = null, result = null, self = this;
    try {
      result = compute.apply(this, arguments);
    } catch (e) {
      error = e;
    }
    // Ensure the subscriber's handlers are called after the
    // result is returned to the caller
    setTimeout(function() {
      handlers.forEach(function(handler) {
        handler.call(self, error, result);
      });
    }, 0);

    return result;
  };

  fn.subscribe = function(callback) {
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