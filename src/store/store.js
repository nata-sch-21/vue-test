import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const globalState = {
  count: 0,
};

const getters = {
  evenOrOdd: (state) => {
    if (state.count % 2 === 0) {
      return 'even';
    }

    return 'odd';
  },
};

const mutations = {
  increment: (state) => {
    state.count += 1;
  },
  decrement: (state) => {
    state.count -= 1;
  },
};

const actions = {
  increment: ({ commit }) => commit('increment'),
  decrement: ({ commit }) => commit('decrement'),
  incrementIfOdd: ({ commit, state }) => {
    if ((state.count + 1) % 2 === 0) {
      commit('increment');
    }
  },
  incrementAsync: ({ commit }) => new Promise((resolve) => {
    setTimeout(() => {
      commit('increment');
      resolve();
    }, 500);
  }),
};

export default new Vuex.Store({
  state: globalState,
  getters,
  mutations,
  actions,
});
