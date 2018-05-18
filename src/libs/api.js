import axios from 'axios';
import * as utils from '@/libs/utils';
//
const defaultConfig = {
  baseURL: process.env.VUE_APP_API_BASE,
  timeout: 10000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  },
  // withCredentials: true,
};
//
export function call(info) {
  let method = info.method || 'get';
  let data = info.data || null;
  //
  switch (method) {
    case 'post':
    case 'put':
    case 'patch':
      data = formatData(data);
      break;
  }
  //
  createInstance(info.config, info.auth)
    [method](info.url, data)
    .then((response) => {
      if (info.callbackOk) {
        info.callbackOk(response.data);
      }
    })
    .catch((error) => {
      if (info.callbackFail) {
        console.log('error @ ' + method + ' : ' + info.url);
        if (error.response) {
          console.log(error.response);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
        info.callbackFail(error);
      }
    });
}
export function createInstance(customConfig, auth = true) {
  let authConfig;
  if (localStorage.getItem('accessToken') && auth !== false) {
    authConfig = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
      },
    };
  }
  return axios.create(
    utils.deepmergeAll([defaultConfig, customConfig, authConfig])
  );
}
export function getDefaultConfig() {
  return defaultConfig;
}
//
function formatData(data) {
  let qs = require('qs');
  return qs.stringify(data);
}
