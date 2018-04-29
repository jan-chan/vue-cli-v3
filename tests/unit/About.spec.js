import { expect } from 'chai';
import { createRouter } from '@/router/create';
import { shallow, createLocalVue } from '@vue/test-utils';
import About from '@/views/About';
//
describe('About.vue', () => {
  const localVue = createLocalVue();
  const h1 = 'This is an about page';
  //
  it('renders page', () => {
    const router = createRouter({ About });
    const wrapper = shallow(About, {
      localVue,
      router,
    });
    wrapper.vm.$router.push({ path: '/about' });
    expect(wrapper.vm.$el.querySelector('h1').textContent).to.equal(h1);
  });
  it('route by path', () => {
    const router = createRouter({ About });
    const wrapper = shallow(About, {
      localVue,
      router,
    });
    wrapper.vm.$router.push({ path: '/about' });
    expect(wrapper.vm.$router.currentRoute.name).to.equal('about');
    expect(wrapper.vm.$el.querySelector('h1').textContent).to.equal(h1);
  });
  it('route by name', () => {
    const router = createRouter({ About });
    const wrapper = shallow(About, {
      localVue,
      router,
    });
    wrapper.vm.$router.push({ name: 'about' });
    expect(wrapper.vm.$router.currentRoute.path).to.equal('/about');
    expect(wrapper.vm.$el.querySelector('h1').textContent).to.equal(h1);
  });
});
