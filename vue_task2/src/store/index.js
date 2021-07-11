import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
		count: 0,
		teamname:''
  },
	mutations: {
		incrementMutation(state) {
      state.count++;
    },
		setTeamname(state, val) {
			state.teamname = val;
		}
  },
	actions: {
		incrementAction(context) {
			context.commit("incrementMutation");
		}
	}
})
