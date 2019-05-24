function _instanceof(left, right) {
  if (right != null && typeof Symbol !== 'undefined' && right[Symbol.hasInstance]) {
    return right[Symbol.hasInstance](left);
  } else {
    return left instanceof right;
  }
}

function _classCallCheck(instance, Constructor) {
  if (!_instanceof(instance, Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

var Properties = function Properties() {
  'use strict';

  var _this = this;

  _classCallCheck(this, Properties);

  _defineProperty(this, 'setHeader', function(setHeader) {
    header = setHeader;
  });

  _defineProperty(this, 'addToHeader', function(addValue) {
    header.push(addValue);
  });

  _defineProperty(this, 'removeFromHeader', function(removeValue) {
    delete removeValue.removeValue;
  });

  _defineProperty(this, 'resetHeader', function() {
    header = {};
  });

  _defineProperty(this, 'setUrl', function(url) {
    _this.url = url;
  });

  _defineProperty(this, 'setOutputAsJson', function() {
    returnJson = true;
  });

  _defineProperty(this, 'setOutputAsFetch', function() {
    returnJson = false;
  });
};

_defineProperty(Properties, 'header', {});

_defineProperty(Properties, 'url', void 0);

_defineProperty(Properties, 'returnJson', false);

var properties = new Properties();
/**
 * Set a header object.
 * @param {Object} setHeader
 */

var setHeader = function setHeader(_setHeader) {
  properties.header = _setHeader;
};
/**
 * Get the current header
 * @param {Object} setHeader
 */

var gettHeader = function gettHeader() {
  return properties.header;
};
/**
 * Add a object to the current header object.
 * @param {Object} addValue
 */

var addToHeader = function addToHeader(addValue) {
  properties.header.push(addValue);
};
/**
 * Remove a property from the current header object.
 * @param {ObjectPropertyName} removeValue
 */

var removeFromHeader = function removeFromHeader(removeValue) {
  delete properties.header.removeValue;
};
/**
 * Reset the header property.
 */

var resetHeader = function resetHeader() {
  properties.header = {};
};
/**
 * Set the output type as json.
 */

var setOutputAsJson = function setOutputAsJson() {
  properties.returnJson = true;
};
/**
 * Set the output type as a fetch data return.
 */

var setOutputAsFetch = function setOutputAsFetch() {
  properties.returnJson = false;
};
/** Do a get fetch call for a json object
 * @param {String} url
 * @return json object form the fetch call.
 */

var getFetch = async function getFetch(url) {
  var response = await fetch(url, {
    method: 'GET',
    headers: properties.header
  });
  if (properties.returnJson) return await response.json();
  return await response;
};
/**
 * Do a post fetch call for a json post.
 * @param {String} url
 * @param {[Object]} bodyToSend the body send in json as normal object.
 * @return json object from the fetch call.
 */

var postFetch = async function postFetch(url) {
  var bodyToSend = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var response = await fetch(url, {
    method: 'POST',
    headers: properties.header,
    body: JSON.stringify(bodyToSend)
  });
  if (properties.returnJson) return await response.json();
  return await response;
};
/**
 * Do a delete fetch call for a API delete
 * @param {String} url
 * @param {[Object]} bodyToSend the body send in json as normal object.
 * @return json object from the fetch call.
 */

var deleteFetch = async function deleteFetch(url, bodyToSend) {
  var response = await fetch(url, {
    method: 'DELETE',
    headers: properties.header,
    body: JSON.stringify(bodyToSend)
  });
  if (properties.returnJson) return await response.json();
  return await response;
};
/**
 * Do a put fetch call for a API delete
 * @param {String} url
 * @param {[Object]} bodyToSend the body send in json as normal object.
 * @return json object from the fetch call.
 */

var putFetch = async function putFetch(url, bodyToSend) {
  var response = await fetch(url, {
    method: 'PUT',
    headers: properties.header,
    body: JSON.stringify(bodyToSend)
  });
  if (properties.returnJson) return await response.json();
  return await response;
};
