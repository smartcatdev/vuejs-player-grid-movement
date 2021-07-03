import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    playerPosition: 1
  },
  mutations: {
    UPDATE_POSITION(state, payload) {
      state.playerPosition += payload
    },
  },
  actions: {
    moveLeft() {
      if ((this.state.playerPosition - 1) % 10 != 0) {
        this.commit('UPDATE_POSITION', -1)
      }
    },
    moveRight() {
      if (this.state.playerPosition % 10 != 0) {
        this.commit('UPDATE_POSITION', +1)
      }
    },
    moveUp() {
      if (this.state.playerPosition > 10) {
        this.commit('UPDATE_POSITION', -10)
      }
    },
    moveDown() {
      if (this.state.playerPosition <= 90) {
        this.commit('UPDATE_POSITION', +10)
      }
    }
  },
  getters: {
    getCurrentPosition(state) {
      return state.playerPosition
    }
},
  modules: {
  }
})
