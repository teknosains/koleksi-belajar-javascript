
(function(global, moduleName, factory) {
  if (typeof define === 'function' && define.amd) {
    // support untuk AMD
    define([], factory);
  } else if (typeof module === 'object') {
    // support untuk Node.JS
    module.exports = factory();
  } else {
    // support untuk Browser (global adalah global window)
    // namai Library kita "Calculator"
    global[moduleName] = factory();
  }
})(this, 'Calculator', function() {
  function _add(a, b) {
    return a + b;
  }

  return {
    add: _add
  }
});