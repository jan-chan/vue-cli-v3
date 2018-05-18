import * as api from '@/libs/api';

export function login(info) {
  api.call({
    url: '/api/login',
    method: 'post',
    noAccessToken: true,
    ...info,
  });
}
export function logout(info) {
  api.call({
    url: '/api/logout',
    method: 'post',
    ...info,
  });
}
export function getInfo(info) {
  api.call({
    url: '/api/user',
    ...info,
  });
}
