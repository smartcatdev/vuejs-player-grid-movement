// import Game from '@/components/Game.vue'
import Controls from '@/components/Controls.vue'
import { mount } from '@vue/test-utils'

describe('Controls', () => {
    test('if grid is rendered', () => {
        const wrapper = mount(Controls)
        expect(wrapper.find('button').isVisible()).toBe(true)
    })
})