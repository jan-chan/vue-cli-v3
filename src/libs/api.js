import axios from 'axios';

export const HTTP = axios.create({
  baseURL: process.env.VUE_APP_API_BASE,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  },
  withCredentials: true,
});

export default HTTP;

export function formatData(data) {
  let qs = require('qs');
  return qs.stringify(data);
}

export function postData(method, data) {
  return HTTP.post(method, formatData(data));
}
export function getData(method, data) {
  return HTTP.get(method, { params: data });
}

export function callApi(type, method, data, callbackOk, callbackFail) {
  let prom = type === 'post' ? postData : getData;
  prom(method, data)
    .then(function(response) {
      let data = response.data;
      let status = data.status;
      if (status === 200 || status === 201 || status === 204) {
        callbackOk(data);
      } else {
        callbackFail(data);
      }
    })
    .catch(function(error) {
      // console.log('error @ ' + method);
      // console.log(error);
      if (error.response) {
        // console.log(error.response.data);
        // console.log(error.response.status);
        // console.log(error.response.headers);
      }
      callbackFail(error);
    });
}
export function callPost(method, data, callbackOk, callbackFail) {
  callApi('post', method, data, callbackOk, callbackFail);
}
export function callGet(method, data, callbackOk, callbackFail) {
  callApi('get', method, data, callbackOk, callbackFail);
}
