import { expect } from 'chai';
import { shallow } from '@vue/test-utils';
import MessageBox from '@/components/MessageBox.vue';

describe('MessageBox.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallow(MessageBox, {
      propsData: { msg },
    });
    expect(wrapper.text()).to.include(msg);
  });
});
