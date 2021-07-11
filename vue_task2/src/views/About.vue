<template>
  <div class="about">
		<h2>current team: {{ getTeamname }}</h2>
		<button @click="increase(getTeamname)">counter</button>
		<h2>{{ $store.state.count }}</h2>
		<p>Last team name clicked: {{ $store.state.teamname }}</p>
		<router-link :to="`/`">戻る</router-link>
  </div>
</template>


<script>
export default {
	name: "About",
  props: ['teamid'],
	data() {
    return {
      teams: [
        {
          id: "c36136ef-552f-4dc9-84b6-65ecb8574e81",
          name: "Team_A",
        },
        {
          id: "ed0459f5-716d-4ef4-99ba-5dc750dfe0d0",
          name: "Team_B",
        },
        {
          id: "60d0d5d5-8ce9-41d9-a65b-13a090c10ae1",
          name: "Team_C",
        },
      ]
    };
  },
  computed: {
    getTeamname: function () {
			var self = this;
      return this.teams.filter(x => x.id === self.teamid)[0].name;
    }
  },
	methods:{
    increase(teamname){
      this.$store.dispatch("incrementAction");
			this.$store.commit("setTeamname", teamname);
    }
  }
};
</script>
