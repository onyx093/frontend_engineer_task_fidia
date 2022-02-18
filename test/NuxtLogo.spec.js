import { mount } from '@vue/test-utils'
import BrandLogo from '@/components/BrandLogo.vue'

describe('BrandLogo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(BrandLogo)
    expect(wrapper.vm).toBeTruthy()
  })
});
