import * as api from '@/libs/api';

import * as dummy from '@/dummy/member';

export function login(data, callbackOk, callbackFail) {
  if (process.env.VUE_APP_DUMMY_DATA === 'true') {
    dummy.login(data, callbackOk, callbackFail);
  } else {
    api.call({
      method: 'post',
      data: data,
      url: '/api/login',
      callbackOk: callbackOk,
      callbackFail: callbackFail,
      auth: false,
    });
  }
}
export function logout(data, callbackOk, callbackFail) {
  if (process.env.VUE_APP_DUMMY_DATA === 'true') {
    dummy.logout(data, callbackOk, callbackFail);
  } else {
    api.call({
      method: 'post',
      data: data,
      url: '/api/logout',
      callbackOk: callbackOk,
      callbackFail: callbackFail,
      auth: false,
    });
  }
}
export function getInfo(data, callbackOk, callbackFail) {
  if (process.env.VUE_APP_DUMMY_DATA === 'true') {
    dummy.getInfo(data, callbackOk, callbackFail);
  } else {
    api.call({
      data: data,
      url: '/api/user',
      callbackOk: callbackOk,
      callbackFail: callbackFail,
    });
  }
}
