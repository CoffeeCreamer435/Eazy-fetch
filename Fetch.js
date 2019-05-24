import { Properties } from './Properties';

const properties = new Properties();

/**
 * Set a header object.
 * @param {Object} setHeader
 */
export const setHeader = setHeader => {
  properties.header = setHeader;
};

/**
 * Get the current header
 * @param {Object} setHeader
 */
export const gettHeader = () => {
  return properties.header;
};

/**
 * Add a object to the current header object.
 * @param {Object} addValue
 */
export const addToHeader = addValue => {
  properties.header.push(addValue);
};

/**
 * Remove a property from the current header object.
 * @param {ObjectPropertyName} removeValue
 */
export const removeFromHeader = removeValue => {
  delete properties.header.removeValue;
};

/**
 * Reset the header property.
 */
export const resetHeader = () => {
  properties.header = {};
};

/**
 * Set the output type as json.
 */
export const setOutputAsJson = () => {
  properties.returnJson = true;
};

/**
 * Set the output type as a fetch data return.
 */
export const setOutputAsFetch = () => {
  properties.returnJson = false;
};

/** Do a get fetch call for a json object
 * @param {String} url
 * @return json object form the fetch call.
 */
export const getFetch = async url => {
  const response = await fetch(url, {
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
export const postFetch = async function(bodyToSend = {}) {
  const response = await fetch(url, {
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
export const deleteFetch = async function(bodyToSend) {
  const response = await fetch(url, {
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
export const putFetch = async function(bodyToSend) {
  const response = await fetch(url, {
    method: 'PUT',
    headers: properties.header,
    body: JSON.stringify(bodyToSend)
  });
  if (properties.returnJson) return await response.json();
  return await response;
};
