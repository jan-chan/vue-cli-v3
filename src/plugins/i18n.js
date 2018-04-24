import Vue from 'vue'
import VueI18n from 'vue-i18n'

import * as hk from '@/locales/zh-hk.json';

Vue.use(VueI18n)

export function createLocale () {
  return new VueI18n({
    locale: '',
    fallbackLocale: 'hk',
    messages: {
      // 2 ways to load json
      'hk': hk,
      'cn': require('@/locales/zh-cn.json'),
      'en': require('@/locales/en.json')
    }
  })
}
