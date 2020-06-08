import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations/mutations'
import getters from './getters/getters'
import commonActions from './actions/actions'
import api from './actions/api'

const actions = {...commonActions, ...api}

Vue.use(Vuex)

let store = new Vuex.Store({
    state: {
        cases: [],
        caseElement: {},
        isDeleted: false
    },
    mutations,
    actions,
    getters
})

export default store