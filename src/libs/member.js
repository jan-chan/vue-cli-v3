import * as api from '@/libs/api';

import * as dummy from '@/dummy/member';

export function login(data, callbackOk, callbackFail) {
  if (process.env.VUE_APP_DUMMY_DATA !== 'true') {
    api.callPost('member/login', data, callbackOk, callbackFail);
  } else {
    dummy.login(data, callbackOk, callbackFail);
  }
}
export function logout(data, callbackOk, callbackFail) {
  if (process.env.VUE_APP_DUMMY_DATA !== 'true') {
    api.callPost('member/logout', data, callbackOk, callbackFail);
  } else {
    dummy.logout(data, callbackOk, callbackFail);
  }
}
export function getInfo(data, callbackOk, callbackFail) {
  if (process.env.VUE_APP_DUMMY_DATA !== 'true') {
    api.callPost('member/info', data, callbackOk, callbackFail);
  } else {
    dummy.getInfo(data, callbackOk, callbackFail);
  }
}
