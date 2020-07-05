import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations/mutations'
import getters from './getters/getters'
import commonActions from './actions/commonActions'
import api from './actions/api'

const actions = {...commonActions, ...api}

Vue.use(Vuex)

let store = new Vuex.Store({
    state: {
        cases: [],
        caseElement: {},
        isDeleted: false,
        authMe: {
            isAuth: false,
            name: '',
            email: ''
        },
        isRegisterValidate: false
    },
    mutations,
    actions,
    getters
})

export default store