import Vue from 'vue'
import Vuex from 'vuex'

import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        lazyLoad: true,
        error: null,
        searched: 0,
        weapons: [],
        news: [],
        player: [],
        matchesAll: [],
        items: [],
        itemType: 'attach',
        weaponType: 'ar',
        best: [],
        asideLeader: [],
        newsDetail: [],
        playerBestTop: {
            kd: [],
            matches: []
        },
        rank: {
            no: null,
            counter: 0,
        },
        score: 0
    },
    getters,
    mutations,
    actions
})