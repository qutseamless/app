/**
 * @module request
 * a helper for making api requests.
 */
import query from 'querystring';


/**
 * @type {Object} defaultHeaders default.
 */
const defaultHeaders = {
  'Content-Type': 'application/json',
};


/**
 * helper function: for appending request specific headers to the default headers.
 * @param  {Object} requestHeaders to append to defaultHeaders.
 * @param  {Object} defaultHeaders for all requests.
 * @returns {Object} containing the combined headers.
 */
function appendHeaders(requestHeaders, defaultHeaders) {
  let combinedHeaders = defaultHeaders;
  for (const [k, i]  of requestHeaders.entries()) {
    combinedHeaders[k] = i;
  }
  return combinedHeaders;
}


/**
 * helper function: for appending querystring to url.
 * @param  {String} endpoint of the url.
 * @param  {Object} data to append.
 * @returns {String} containing the url of the endpoint and optionally any queries.
 */
function appendQuery(endpoint, data) {
  if (data) {
    return endpoint + '?' +  query.stringify(data);
  }
  return endpoint;
}


/**
 * helper function: which handles the request.
 * @param {String} endpoint to request.
 * @param {String} type of request.
 * @param {Object} data to send with request.
 * @param {Object} requestHeaders to attach to request
 * @returns {Promise} resolving with the response.
 */
async function request(endpoint, method, data, requestHeaders) {
  let headers = appendHeaders(requestHeaders, defaultHeaders)

  const payload = { headers, method };

  if (method === 'POST') {
    payload.body = JSON.stringify(data);
  }

  let url = method !== 'POST' ? appendQuery(endpoint, data) : endpoint;

  try {
    return await fetch(url, payload);
  } catch (error) {
    throw new Error(error);
  }
}



/**
 * makes a get request.
 * @param  {String} endpoint to request from.
 * @param  {Object} data to send.
 * @param  {Object} headers to attach to request.
 * @returns {Promise} resolving with response.
 */
export function get(endpoint, data, headers) {
  return request(endpoint, 'GET', data, headers);
}


/**
 * makes a post request.
 * @param  {String} endpoint to request from.
 * @param  {Object} data to send.
 * @param  {Object} headers to attach to request.
 * @returns {Promise} resolving with response.
 */
export function post(endpoint, data, headers) {
  return request(endpoint, 'POST', data, headers);
}


/**
 * makes a update request.
 * @param  {String} endpoint to request from.
 * @param  {Object} data to send.
 * @param  {Object} headers to attach to request.
 * @returns {Promise} resolving with response.
 */
export function update(endpoint, data, headers) {
  return request(endpoint, 'PUT', data, headers);
}


/**
 * makes a delete request.
 * @param  {String} endpoint to request from.
 * @param  {Object} data to send.
 * @param  {Object} headers to attach to request.
 * @returns {Promise} resolving with response.
 */
export function del(endpoint, data, headers) {
  return request(endpoint, 'DELETE', data, headers);
}
