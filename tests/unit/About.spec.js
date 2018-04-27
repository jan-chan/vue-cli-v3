import { expect } from 'chai'
import { shallow, createLocalVue  } from '@vue/test-utils'
import { createRouter } from '@/router/create'
import About from '@/views/About.vue'
import VueRouter from 'vue-router'
import Vue from 'vue'

describe('Route to /about', () => {
  it('renders About page with message', () => {
    const localVue = createLocalVue()
    // const instance = Vue.extend()
    const $route = createRouter()
    const wrapper = shallow(About, {
      globals: { $route },
      localVue
    })
    console.log(wrapper.text())
    console.log($route.name)
    expect(wrapper.text()).to.include('This is an about page')
    /*
    Vue.use(VueRouter)
    const router = createRouter()
    const vm = new Vue({
      el: document.createElement('div'),
      router: router,
      render: h => h('router-view')
    })
    router.push({name: 'about', params: {id: 123}})
    Vue.nextTick(() => {
      console.log('html:', vm.$el)
      expect(vm.$el.querySelector('h1').textContent).to.equal('This is an about page')
      done()
    })
    */

    // const localVue = createLocalVue()
    // const router = createRouter()
    // localVue.use(VueRouter)
    // localVue.$route = router
    //
    // const wrapper = shallow(About, {
    //   localVue
    // })
    // router.push({name: 'about'})
    // expect(wrapper.text()).to.include('This is an about page')
    // wrapper.vm.$route.path
    // const vm = new Constructor().$mount()
    // expect(vm.$el.textContent).to.equal($route.name)
  })
})
