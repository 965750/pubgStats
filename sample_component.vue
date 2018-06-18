<template>
    <div>
        <div class="bestCont">
            <div class="topCont">
                <h1>Top Players</h1>
                <h2>Average Damage</h2>
            </div>
            <div class="botCont">
                <div class="singlePlayer" v-for="(player, index) in asideLeader" :key="player.name">
                    <div class="leftSide">
                        <span class="bestNo">#{{index + 1}}</span>
                        <h3 @click="searchPlayer(player.region, player.name)">{{player.name}}</h3>
                    </div>
                    <div class="rightSide">
                        <h3>{{player.avg | pkt}} DMG</h3>
                        <div class="barCont">
                          <div class="bar" :style="{width: `${player.avg / 5}%`}"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  name: "TopPlayersAside",
  computed: {
    ...mapGetters([
      'asideLeader'
    ])
  },
  methods: {
    ...mapActions([
      'clearLeader',
      'getLeader',
      'clearPlayer',
      'getSearch',
      'getPlayer'
    ]),
    searchPlayer(region, name){
          let player = {
              name: name,
              region: region
          }
          this.clearPlayer()
          this.$router.push({name: "Player", params: {userId: name, region: region}})
          this.getPlayer(player)
          this.playerInp = null
          this.getSearch()
      },
  },
  created() {
    this.clearLeader()
    this.getLeader()
  }
}
</script>