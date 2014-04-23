(function() {
  var exports = {};

  var chrome = window.chrome;

  exports.getLocal = function(name, cb) {
    chrome.storage.local.get(name, function(item) {
      cb(item[name]);
    });
  };

  exports.setLocal = function(item) {
    chrome.storage.local.set(item);
  };

  exports.copyToClipboard = function(domElement) {
    domElement.focus();
    document.execCommand('SelectAll');
    document.execCommand('copy');
  };

  window.vendor = exports;
}());