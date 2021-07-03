import { createLocalVue, mount } from '@vue/test-utils'
import Vuex from 'vuex'
import Game from '@/components/Game.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Game', () => {

    let store, getters

    beforeEach(() => {
        getters = {
            getCurrentPosition: jest.fn(),
        },
        store = new Vuex.Store({
            state: {},
            getters
        })
    })

    test('Grid renders', () => {
        const wrapper = mount(Game, { store, localVue })
        expect(wrapper.find('#grid').isVisible()).toBe(true)
    })
    
})
