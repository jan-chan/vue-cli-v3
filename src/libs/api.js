import axios from 'axios';
import * as utils from '@/libs/utils';
//
const defaultConfig = {
  baseURL: process.env.VUE_APP_API_BASE,
  // timeout: 10000,
  // withCredentials: true,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  },
  noAccessToken: false,
};
//
export function call(info = {}) {
  let config = { ...info };
  //
  switch (config.method) {
    case 'post':
    case 'put':
    case 'patch':
      config.data = formatData(config.data);
      break;
    case 'get':
    case undefined:
      if (config.data) {
        config.url += '?' + formatData(config.data);
      }
      break;
  }
  //
  delete config.callbackFail;
  delete config.callbackOk;
  //
  axios(getConfig(config))
    .then((response) => {
      if (info.callbackOk) {
        info.callbackOk(response.data);
      }
    })
    .catch((error) => {
      if (info.callbackFail) {
        info.callbackFail(error);
      }
    });
}
export function createInstance(customConfig = {}) {
  return axios.create(getConfig(customConfig || {}));
}
export function getConfig(customConfig = {}) {
  let authConfig = {};
  if (!customConfig.noAccessToken && localStorage.getItem('accessToken')) {
    authConfig.headers = {
      Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
    };
  }
  return utils.deepmergeAll([defaultConfig, customConfig, authConfig]);
}
export function getDefaultConfig() {
  return defaultConfig;
}
//
function formatData(data) {
  return require('qs').stringify(data);
}
