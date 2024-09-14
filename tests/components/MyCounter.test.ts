import { describe, should, test } from 'vitest';
import { mount } from '@vue/test-utils';
import MyCounter from '../../src/components/MyCounter.vue';

describe('My Counter component', () => {
  test('should match snapshop', () => {
    const wrapper = mount(MyCounter, {
      props: {
        value: 5,
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
